import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import {
  artGallerySchema,
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
      const { res } = ctx;
      await ctx.prisma.restaurant.update({
        where: { id: input.id },
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  patchBar: publicProcedure
    .input(barSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.bar.update({
        where: { id: input.id },
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  patchBakeryAndDessert: publicProcedure
    .input(bakeryAndDessertSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.bakeryAndDessert.update({
        where: { id: input.id },
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  patchCafe: publicProcedure
    .input(cafeSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.cafe.update({
        where: { id: input.id },
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  patchGroceryAndLiquor: publicProcedure
    .input(groceryAndLiquorSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.groceryAndLiquor.update({
        where: { id: input.id },
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  patchShop: publicProcedure
    .input(shopSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.shop.update({
        where: { id: input.id },
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  patchArtGallery: publicProcedure
    .input(artGallerySchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.artGallery.update({
        where: { id: input.id },
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  createRestaurant: publicProcedure
    .input(restaurantSchema.extend({ guide: z.string() }).omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.restaurant.create({
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  createBar: publicProcedure
    .input(barSchema.extend({ guide: z.string() }).omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;

      await ctx.prisma.bar.create({
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);

      return { success: true };
    }),

  createCafe: publicProcedure
    .input(cafeSchema.extend({ guide: z.string() }).omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;

      await ctx.prisma.cafe.create({
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);

      return { success: true };
    }),

  createShop: publicProcedure
    .input(shopSchema.extend({ guide: z.string() }).omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;

      await ctx.prisma.shop.create({
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);

      return { success: true };
    }),

  createBakeryAndDessert: publicProcedure
    .input(
      bakeryAndDessertSchema.extend({ guide: z.string() }).omit({ id: true })
    )
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;

      await ctx.prisma.bakeryAndDessert.create({
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);

      return { success: true };
    }),

  createGroceryAndLiquor: publicProcedure
    .input(
      groceryAndLiquorSchema.extend({ guide: z.string() }).omit({ id: true })
    )
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;

      await ctx.prisma.groceryAndLiquor.create({
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);

      return { success: true };
    }),

  createArtGallery: publicProcedure
    .input(artGallerySchema.extend({ guide: z.string() }).omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;

      await ctx.prisma.artGallery.create({
        data: { ...input },
      });
      await res.revalidate(`/${input.guide}`);

      return { success: true };
    }),

  deleteRestaurant: publicProcedure
    .input(z.object({ id: z.string(), guide: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.restaurant.delete({
        where: { id: input.id },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  deleteBar: publicProcedure
    .input(z.object({ id: z.string(), guide: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.bar.delete({
        where: { id: input.id },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  deleteCafe: publicProcedure
    .input(z.object({ id: z.string(), guide: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.cafe.delete({
        where: { id: input.id },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  deleteBakeryAndDessert: publicProcedure
    .input(z.object({ id: z.string(), guide: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.bakeryAndDessert.delete({
        where: { id: input.id },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  deleteArtGallery: publicProcedure
    .input(z.object({ id: z.string(), guide: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.artGallery.delete({
        where: { id: input.id },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  deleteGroceryAndLiquor: publicProcedure
    .input(z.object({ id: z.string(), guide: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.groceryAndLiquor.delete({
        where: { id: input.id },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),

  deleteShop: publicProcedure
    .input(z.object({ id: z.string(), guide: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      console.log("________________\n");
      const { res } = ctx;
      await ctx.prisma.shop.delete({
        where: { id: input.id },
      });
      await res.revalidate(`/${input.guide}`);
      return { success: true };
    }),
});
