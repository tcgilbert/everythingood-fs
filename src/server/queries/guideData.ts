import { prisma } from "../db";

export const getStaticGuideData = async (guide: string) => {
  const restaurants = await prisma.restaurant.findMany({
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
      link: true,
      alsoGreat: true,
      idealMeal: true,
    },
  });

  const bars = await prisma.bar.findMany({
    where: { guide },
    select: {
      id: true,
      name: true,
      description: true,
      guide: true,
      idealGroupNumber: true,
      note: true,
      price: true,
      drinkSpecialty: true,
      link: true,
      food: true,
    },
  });

  const cafes = await prisma.cafe.findMany({
    where: { guide },
    select: {
      id: true,
      name: true,
      description: true,
      guide: true,
      specialty: true,
      roomToHang: true,
      note: true,
      bakedGoods: true,
      coffeeBeans: true,
      link: true,
    },
  });

  const shops = await prisma.shop.findMany({
    where: { guide },
    select: {
      id: true,
      name: true,
      description: true,
      link: true,
    },
  });

  const artGalleries = await prisma.artGallery.findMany({
    where: { guide },
    select: {
      id: true,
      name: true,
      link: true,
    },
  });

  const bakeriesAndDesserts = await prisma.bakeryAndDessert.findMany({
    where: { guide },
    select: {
      id: true,
      name: true,
      link: true,
      price: true,
      roomToHang: true,
      bestThingOnTheMenu: true,
      alsoGreat: true,
      note: true,
      description: true,
    },
  });

  const groceriesAndLiquor = await prisma.groceryAndLiquor.findMany({
    where: { guide },
    select: {
      id: true,
      name: true,
      link: true,
      description: true,
    },
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
