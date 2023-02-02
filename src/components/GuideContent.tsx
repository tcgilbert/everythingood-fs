import { InferGetStaticPropsType } from "next";
import { getStaticGuideData } from "../server/queries/guideData";

export const getStaticProps = async () => {
  const data = await getStaticGuideData("les");

  return {
    props: {
      data,
    },
  };
};

export const GuideContent = (
  { data }: InferGetStaticPropsType<typeof getStaticProps>,
  displayed: string
) => {
  const {
    artGalleries,
    restaurants,
    cafes,
    bakeriesAndDesserts,
    bars,
    groceriesAndLiquor,
    shops,
  } = data;

  return <div className=""></div>;
};
