import { InferGetStaticPropsType, type NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { GuideContent } from "../components/GuideContent";
import { GuideNav } from "../components/GuideNav";
import SohoNohoMap from "../public/sohonoho-map.jpg";

import { getStaticGuideData } from "../server/queries/guideData";

export const getStaticProps = async () => {
  const data = await getStaticGuideData("soho-noho");

  return {
    props: {
      data,
    },
  };
};

const SohoNoho = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [displayed, setDisplayed] = useState("restaurants");
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* intro */}
      <div className="py-3" />
      <div className="overflow-hidden rounded-lg bg-gray-100 shadow">
        <h1 className="pt-5 text-center font-eb text-6xl font-bold">
          Everything Good
        </h1>
        <p className="mt-3 text-center font-robo text-2xl font-bold">
          on the Lower East Side
        </p>
        <div className="px-4 py-5 sm:p-6">
          <p className="text-center font-eb text-lg">
            <span className="font-eb text-red-500">Don’t worry. </span>
            This is not a list of the best spots to get street-styled or a
            manual for bribing the Balthazar maître d’ or best practices for
            securing NikeLab releases or a map of where the Jenners and Hadids
            have apartments.{" "}
            <span className="font-eb text-red-500">
              It’s (hopefully) not eye roll material.
            </span>
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            <span className="font-eb text-red-500">
              Everything Good is a very thorough guide to neighborhoods in NYC.{" "}
            </span>
            They are complete, single-source dockets meant to give you 360
            degree recommendations that span the entirety of a neighborhood, and
            this is quite literally a guide to everything good in the
            fashionable, see-and-be-seen, sometimes crowded, oftentimes
            insufferable neighborhoods of SoHo and NoHo. It Includes everything
            from art galleries to bakeries to coffee shops to clothing boutiques
            to bars and restaurants. And while there’s a lot of noise in these
            two neighborhoods, they are also home to some of the best food and
            shopping in all of NYC.
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            Anyway, this is the second installment of Everything Good.
            <span className="font-eb text-red-500">
              You can find the first guide to the LES right here. There will be
              many more.
            </span>
            I’m the only person writing and gathering these recommendations, so
            if you do not see a spot (well-known or not) on this list, it might
            be because I don’t know it. But most likely, it’s because I don’t
            really like it.
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            As you may have noticed, this guide is not a design object. It’s a
            Google Doc. I could have tried harder to make this look cool, but I
            didn’t. The point is just to give you recommendations as directly as
            possible. There are some iPhone photos to give added flavor to these
            recommendations, which are broken down by categories and presented
            with information I think is important to know about each spot. This
            is a long list.
            <span className="font-eb text-red-500">
              More is (allegedly) more.
            </span>
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            For this installment of Everything Good, I am keeping access free,
            but I’d love it if you could make a donation to{" "}
            <a
              className="text-red-600"
              href="https://give.glwd.org/give/244921/?&_ga=2.82856336.720855393.1659365992-1819495194.1658185824&_gac=1.152424907.1659365992.Cj0KCQjw852XBhC6ARIsAJsFPN2ROn8IwnasS4uPZ7g5p2G1i2Dm1jOOEHF6rAXr9556xlUoF4Cy8aMaAjprEALw_wcB#!/donation/checkout?c_src=WS&c_src2=BU"
            >
              God’s Love We Deliver
            </a>
            , an amazing secular charity in SoHo that provides nutritious meals
            for New Yorkers that are too sick or elderly to cook for themselves.
            They’ve done fantastic work in NYC since 1985 and have been at home
            in SoHo since 2015. If you’re using this list, please donate!
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            I hope you find this list useful. It might not be. Either way, share
            it with your friends, donate, support these businesses, and have an
            excellent day in SoHo and NoHo. Cheers!
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            <a
              href="https://www.instagram.com/alex_delany/"
              className="font-eb text-red-500 underline"
              target={"_blank"}
            >
              — Alex Delany
            </a>
          </p>
          <div className="py-3" />
          <div className="mx-auto max-w-3xl">
            <Image
              src={SohoNohoMap}
              priority={true}
              alt="Map of the Soho and Noho"
              className="shadow-lg"
            />
          </div>
          <div className="py-3" />

          <p className="text-center font-eb text-lg">
            OK, OK, OK. First off, when I say the LES and Two Bridges I mean the
            space outlined in black above. East of The Bowery. South of Houston.
            West of the FDR. And North of the Brooklyn Bridge. I’m not saying
            you didn't know that. But now we definitely 100% all know that.{" "}
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            Also, if you’re like—WAIT, there should be a Google Map with all
            these spots on it, dude!—do not fear. That map exists at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-red-500"
              href="https://www.google.com/maps/d/u/0/viewer?mid=1Tzl_UVT88u__ZH6bTqHHRu8TWsdS2Lc&ll=40.72072746815181%2C-73.99705300000002&z=15"
            >
              this link right here
            </a>
            , so you can have it handy whenever you’re running around living
            your life.{" "}
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            Also—this should go without saying, but…you know—treat ALL
            hospitality workers with kindness, respect, and understanding. Tip
            at least 20%. Tip for your coffee. Tip for your drinks. Always. A
            good relationship in any hospitality environment is a two-way
            street.{" "}
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            Great. Now that we’re all on the same page, let’s get into it…
          </p>
        </div>
      </div>
      <GuideNav displayed={displayed} setDisplayed={setDisplayed} />
      <div className="my-3" />
      <GuideContent displayed={displayed} data={data} />
    </div>
  );
};

export default SohoNoho;
