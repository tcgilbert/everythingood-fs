import { PrismaClient } from "@prisma/client";
import { restaurants } from "./seed-data/restaurants";
import { bars } from "./seed-data/bars";
import { bakeriesAndDessert } from "./seed-data/bakeriesAndDessert";
import { cafes } from "./seed-data/cafes";
import { groceryAndLiquor } from "./seed-data/groceryAndLiquor";
import { shops } from "./seed-data/shops";
import { artGalleries } from "./seed-data/artGalleries";

const prisma = new PrismaClient();

async function main() {
  // delete all data first
  await prisma.restaurant.deleteMany();
  await prisma.bar.deleteMany();
  await prisma.bakeryAndDessert.deleteMany();
  await prisma.cafe.deleteMany();
  await prisma.groceryAndLiquor.deleteMany();
  await prisma.shop.deleteMany();
  await prisma.artGallery.deleteMany();

  // restaurants
  restaurants.forEach(async (restaurant) => {
    const newRestaurant = await prisma.restaurant.create({
      data: restaurant,
    });
    console.log({ newRestaurant });
  });

  // bars
  bars.forEach(async (bar) => {
    const newBar = await prisma.bar.create({
      data: bar,
    });
    console.log({ newBar });
  });

  // bakeriesAndDessert
  bakeriesAndDessert.forEach(async (bakery) => {
    const newBakery = await prisma.bakeryAndDessert.create({
      data: bakery,
    });
    console.log({ newBakery });
  });

  // cafes
  cafes.forEach(async (cafe) => {
    const newCafe = await prisma.cafe.create({
      data: cafe,
    });
    console.log({ newCafe });
  });

  // groceryAndLiquor
  groceryAndLiquor.forEach(async (store) => {
    const newStore = await prisma.groceryAndLiquor.create({
      data: store,
    });
    console.log({ newStore });
  });

  // shops
  shops.forEach(async (shop) => {
    const newShop = await prisma.shop.create({
      data: shop,
    });
    console.log({ newShop });
  });

  // artGalleries
  artGalleries.forEach(async (gallery) => {
    const newGallery = await prisma.artGallery.create({
      data: gallery,
    });
    console.log({ newGallery });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
