import { prisma } from "../db";

export const getStaticGuideData = async (guide: string) => {
  const restaurants = await prisma.restaurant.findMany({
    where: { guide },
  });

  const bars = await prisma.bar.findMany({
    where: { guide },
  });

  const cafes = await prisma.cafe.findMany({
    where: { guide },
  });

  const shops = await prisma.shop.findMany({
    where: { guide },
  });

  const artGalleries = await prisma.artGallery.findMany({
    where: { guide },
  });

  const bakeriesAndDesserts = await prisma.bakeryAndDessert.findMany({
    where: { guide },
  });

  const groceriesAndLiquor = await prisma.groceryAndLiquor.findMany({
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
};
