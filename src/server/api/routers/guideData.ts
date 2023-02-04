import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { patchSchema } from "../schemas";

export const guideData = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ guide: z.string() }))
    .query(async ({ ctx, input }) => {
      const { guide } = input;
      const restaurants = await ctx.prisma.restaurant.findMany({
        where: { guide },
      });

      const bars = await ctx.prisma.bar.findMany({
        where: { guide },
      });

      const cafes = await ctx.prisma.cafe.findMany({
        where: { guide },
      });

      const shops = await ctx.prisma.shop.findMany({
        where: { guide },
      });

      const artGalleries = await ctx.prisma.artGallery.findMany({
        where: { guide },
      });

      const bakeriesAndDesserts = await ctx.prisma.bakeryAndDessert.findMany({
        where: { guide },
      });

      const groceriesAndLiquor = await ctx.prisma.groceryAndLiquor.findMany({
        where: { guide },
      });

      return {
        restaurants,
        bars,
        cafes,
        shops,
        artGalleries,
        bakeriesAndDesserts,
        groceriesAndLiquor,
      };
    }),
  patch: publicProcedure.input(patchSchema).mutation(async ({ ctx, input }) => {
    console.log(input);
    return { success: true };
  }),
});
