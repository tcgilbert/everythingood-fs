import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const guideData = createTRPCRouter({
  fetch: publicProcedure
    .input(z.object({ guide: z.string() }))
    .query(async ({ ctx, input }) => {
      const { guide } = input;
      const restaurants = await ctx.prisma.restaurant.findMany({
        where: { guide },
        select: {
          id: true,
          name: true,
          description: true,
          guide: true,
          idealGroupNumber: true,
          bestThingOnTheMenu: true,
          drinkOrder: true,
          note: true,
          price: true,
          idealMeal: true,
        },
      });
      return { restaurants };
    }),
});
