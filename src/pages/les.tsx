import { type NextPage } from "next";
import Image from "next/image";

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
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="pt-5 text-center font-eb text-6xl font-bold">
        Everything Good
      </h1>
      <p className="mt-3 text-center font-robo text-2xl font-bold">
        on the Lower East Side
      </p>
      {/* intro */}
      <div className="py-3" />
      <div>
        <p className="text-center font-eb">
          <span className="font-eb text-red-500">Don’t worry. </span>
          This is not a screenplay about a Gen Z creative or a pitch about a
          Dimes Square reality TV show or a press release about a luxury brand
          making $900 bags from old takeout menus or something useless like
          that.{" "}
          <span className="font-eb text-red-500">
            It’s (hopefully) not eye roll material.
          </span>
        </p>
        <div className="py-3 font-eb" />
        <p className="text-center font-eb">
          This is quite literally a guide to everything good in the LES and Two
          Bridges, from art galleries to bakeries to coffee shops to clothing
          boutiques to bars and restaurants.{" "}
          <span className="font-eb text-red-500">
            Everything Good is a very thorough guide to neighborhoods in NYC.{" "}
          </span>
          It is a complete, single-source docket meant to give you 360 degree
          recommendations that span the entirety of a neighborhood.
        </p>
        <div className="py-3 font-eb" />
        <p className="text-center font-eb">
          This is the first installment of Everything Good.
          <span className="font-eb text-red-500">
            There will be many more.{" "}
          </span>
          I’m the only person writing and gathering these recommendations. If
          you do not see a spot (well-known or not) on this list, it might be
          because I don’t know it. But most likely, it’s because I don’t really
          like it.
        </p>
        <div className="py-3 font-eb" />
        <p className="text-center font-eb">
          As you may have noticed, this guide is not a design object. It’s a
          Google Doc. I could have tried harder to make this look cool, but I
          didn’t. TBH, my Adobe Suite subscription expired. There are some
          iPhone photos to give added flavor to these recommendations, which are
          broken down by categories and presented with information I think is
          important to know about each spot. This is a long list. More is
          (allegedly) more.
        </p>
        <div className="py-3 font-eb" />
        <p className="text-center font-eb">
          I thought about charging a small fee for this information, but
          instead, for the first installment, I’d love it if you could make a
          donation to the Henry Street Settlement, an amazing charity in the LES
          that provides childcare, cultural programming, housing, art classes,
          health care, and social services for LES residents in need. If you’re
          using this list, please donate!
        </p>
        <div className="py-3 font-eb" />
        <p className="text-center font-eb">
          I hope you find this list useful. It might not be. Either way, share
          it with your friends, donate, support these businesses, and have an
          excellent day in the LES. Cheers!
        </p>
        <div className="py-3 font-eb" />
        <p className="text-center font-eb">
          <a
            href="https://www.instagram.com/alex_delany/"
            className="font-eb font-bold text-red-500 underline"
            target={"_blank"}
          >
            — Alex Delany
          </a>
        </p>
      </div>
    </div>
  );
};

export default Les;
