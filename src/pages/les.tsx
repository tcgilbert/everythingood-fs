import { type NextPage } from "next";

import { getStaticGuideData } from "../server/queries/guideData";

export const getStaticProps = async () => {
  const data = await getStaticGuideData("les");

  return {
    props: {
      data,
    },
  };
};

const Les: NextPage = (props) => {
  return (
    <>
      <div className="">This tha page</div>
      {/* {showData} */}
    </>
  );
};

export default Les;
