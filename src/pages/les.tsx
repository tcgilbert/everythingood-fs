import { type NextPage } from "next";

import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import superjson from "superjson";
import { appRouter } from "../server/api/root";
import { createInnerTRPCContext } from "../server/api/trpc";

export const getStaticProps = async () => {
  if (prisma) {
    const restaurants = await prisma.restaurant.findMany({
      where: {
        guide: "les",
      },
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

    return {
      props: {
        restaurants: restaurants,
      },
    };
  }
};

const Les: NextPage = (props) => {
  console.log("props", props);

  return (
    <>
      <div className="">This tha page</div>
    </>
  );
};

export default Les;

// export const getStaticProps = async () => {
//   const ssg = createProxySSGHelpers({
//     router: appRouter,
//     ctx: createInnerTRPCContext({}),
//     transformer: superjson,
//   });

//   const res = await ssg.guide.getAll.fetch({ guide: "les" });

//   return {
//     props: {
//       restaurants: res.restaurants,
//     },
//   };
// };
