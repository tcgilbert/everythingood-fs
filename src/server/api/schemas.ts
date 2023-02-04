import { z } from "zod";

const barSchema = z.object({
  guide: z.string(),
  description: z.string(),
  drinkSpecialty: z.string(),
  food: z.string(),
  id: z.string(),
  idealGroupNumber: z.string(),
  link: z.string(),
  name: z.string(),
  note: z.string(),
  price: z.string(),
});

const restaurantSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.string(),
  idealGroupNumber: z.string(),
  note: z.string(),
  link: z.string(),
  guide: z.string(),
  bestThingOnTheMenu: z.string(),
  idealMeal: z.string(),
  alsoGreat: z.string(),
  drinkOrder: z.string(),
});

const bakeryAndDessertSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.string(),
  note: z.string(),
  link: z.string(),
  guide: z.string(),
  roomToHang: z.string(),
  bestThingOnTheMenu: z.string(),
  alsoGreat: z.string(),
});

const cafeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  coffeeBeans: z.string(),
  roomToHang: z.string(),
  bakedGoods: z.string(),
  note: z.string(),
  link: z.string(),
  guide: z.string(),
});

const groceryAndLiquorSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  link: z.string(),
  guide: z.string(),
});

const artGallerySchema = z.object({
  id: z.string(),
  name: z.string(),
  link: z.string(),
  guide: z.string(),
});

const shopSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  link: z.string(),
  guide: z.string(),
});

export const patchSchema = barSchema
  .or(restaurantSchema)
  .or(bakeryAndDessertSchema)
  .or(cafeSchema)
  .or(groceryAndLiquorSchema)
  .or(artGallerySchema)
  .or(shopSchema);
