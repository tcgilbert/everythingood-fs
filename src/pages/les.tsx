import { type NextPage } from "next";

import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import superjson from "superjson";
import { appRouter } from "../server/api/root";
import { createInnerTRPCContext } from "../server/api/trpc";
import { api } from "../utils/api";

export const getStaticProps = async () => {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({}),
    transformer: superjson,
  });

  await ssg.guide.getAll.prefetch({ guide: "les" });

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
  };
};

const Les: NextPage = (props) => {
  const resData = api.guide.getAll.useQuery({ guide: "les" });

  const showData = resData.data?.restaurants.map((restaurant) => {
    return (
      <div key={restaurant.id}>
        <h1>{restaurant.name}</h1>
      </div>
    );
  });

  return (
    <>
      <div className="">This tha page</div>
      {showData}
    </>
  );
};

export default Les;
