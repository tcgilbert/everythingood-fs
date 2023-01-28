const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const sobak = await prisma.restaurant.create({
    data: {
      name: "SOBAK",
      link: "https://www.instagram.com/sobak.han/",
      description: "Sobak is a relative new",
      idealMeal: "Lunch",
      price: "$$",
      idealGroupNumber: "1-2",
      bestThingOnTheMenu: "Kochujang enagi (eel) bowl",
      alsoGreat: "Bibimbap, kalbi soup, daily specials",
      drinkOrder: "Korean sodas",
      note: "There are only two seats available inside. If it’s shitty out, eat there. Otherwise, take your food and eat in Seward Park.",
    },
  });
  console.log({ sobak });
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
