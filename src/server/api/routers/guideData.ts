import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import {
  bakeryAndDessertSchema,
  barSchema,
  cafeSchema,
  groceryAndLiquorSchema,
  restaurantSchema,
  shopSchema,
} from "../schemas";

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

  patchRestaurant: publicProcedure
    .input(restaurantSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      await ctx.prisma.restaurant.update({
        where: { id: input.id },
        data: { ...input },
      });
      return { success: true };
    }),

  patchBar: publicProcedure
    .input(barSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      await ctx.prisma.bar.update({
        where: { id: input.id },
        data: { ...input },
      });
      return { success: true };
    }),

  patchBakeryAndDessert: publicProcedure
    .input(bakeryAndDessertSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      await ctx.prisma.bakeryAndDessert.update({
        where: { id: input.id },
        data: { ...input },
      });
      return { success: true };
    }),

  patchCafe: publicProcedure
    .input(cafeSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      await ctx.prisma.cafe.update({
        where: { id: input.id },
        data: { ...input },
      });
      return { success: true };
    }),

  patchGroceryAndLiquor: publicProcedure
    .input(groceryAndLiquorSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      await ctx.prisma.groceryAndLiquor.update({
        where: { id: input.id },
        data: { ...input },
      });
      return { success: true };
    }),

  patchShop: publicProcedure
    .input(shopSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      await ctx.prisma.shop.update({
        where: { id: input.id },
        data: { ...input },
      });
      return { success: true };
    }),
});
