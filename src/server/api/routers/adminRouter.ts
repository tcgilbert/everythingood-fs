import { TRPCError } from "@trpc/server";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";
import { z } from "zod";
import { getJwtSecretKey } from "../../../lib/auth";
import { createTRPCRouter, publicProcedure } from "../trpc";
import cookie from "cookie";

export const adminRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ username: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { res } = ctx;
      const { username, password } = input;

      // admin logs in successfully
      if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
      ) {
        // return jwt cookie
        const token = await new SignJWT({})
          .setProtectedHeader({ alg: "HS256" })
          .setJti(nanoid())
          .setIssuedAt()
          .setExpirationTime("1h")
          .sign(new TextEncoder().encode(getJwtSecretKey()));

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("admin-token", token, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
          })
        );

        return { success: true };
      }

      // admin logs in unsuccessfully
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid username or password",
      });
    }),
  logout: publicProcedure.mutation(async ({ ctx }) => {
    console.log("logout_________________");

    const { res } = ctx;

    res.setHeader(
      "Set-Cookie",
      "admin-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    );

    return { success: true };
  }),
});
