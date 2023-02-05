import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const subscriberRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { email } = input;

      const subscriber = await ctx.prisma.subscriber.findFirst({
        where: { email },
      });

      if (subscriber) {
        return { success: true };
      }

      await ctx.prisma.subscriber.create({
        data: {
          email,
        },
      });

      return subscriber;
    }),
});
