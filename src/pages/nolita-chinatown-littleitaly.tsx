import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import NolitaChinatownLittleItalyMap from "../public/ct-nl-li-map.jpg";
import { useState } from "react";
import { getStaticGuideData } from "../server/queries/guideData";

// components
import { GuideNav } from "../components/GuideNav";
import { GuideContent } from "../components/GuideContent";

export const getStaticProps = async () => {
  const data = await getStaticGuideData("nolita-chinatown-littleitaly");

  return {
    props: {
      data,
    },
  };
};

const NolitaChinatownLittleItaly = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [displayed, setDisplayed] = useState("restaurants");

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* intro */}
      <div className="py-3" />
      <div className="overflow-hidden rounded-t-lg bg-white shadow">
        <h1 className="pt-5 text-center font-eb text-6xl font-bold">
          Everything Good
        </h1>
        <p className="mt-3 text-center font-robo text-2xl font-normal">
          in Nolita, Chinatown, and Little Italy
        </p>
        <div className="px-4 py-5 sm:p-6">
          <p className="text-center font-eb text-lg">
            <span className="font-eb text-red-500">Don’t worry. </span>
            This is not a list of tips to style your Aimé Leon Dore Yankees cap
            or a guide telling you to go to Lombardi’s Pizza or a love letter to
            the San Gennaro Festival or a map of the best brick walls to film
            Tiktok outfit videos in front of.
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
            this is quite literally a guide to everything good in Nolita, Little
            Italy, and Chinatown. It includes everything from art galleries to
            bakeries to coffee shops to clothing boutiques to bars and
            restaurants.
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            This is the third installment of Everything Good.
            <span className="font-eb text-red-500">
              {" "}
              There will be many more.{" "}
            </span>
            I’m the only person writing and gathering these recommendations, so
            if you do not see a spot (well-known or not) on this list, it might
            be because I don’t know it. But it could also be that I don’t really
            like it.
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
              Welcome to Chinatown
            </a>
            , an amazing nonprofit helping preserve businesses and aid residents
            in Manhattan’s Chinatown. They do fantastic work keeping the
            incredibly important culture of Manhattan’s Chinatown thriving
            through education, business grants, programming, and meals for
            residents in need. They rule!
          </p>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            I hope you find this list useful. It might not be. Either way, share
            it with your friends, donate, support these businesses, and have an
            excellent day in Nolita, Chinatown, and Little Italy. Cheers!
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
              src={NolitaChinatownLittleItalyMap}
              priority={true}
              alt="Map of the Lower East Side"
              className="shadow-lg"
            />
          </div>
          <div className="py-3" />
          <p className="text-center font-eb text-lg">
            OK. You might be like, why the fuck did he put these three
            neighborhoods in one guide?!?! Well, listen up, buddy! It’s because
            they’re small and they stack up perfectly on top of each other to
            form one normal-sized neighborhood. I’m talking about the space
            marked on the map above, bound by Houston St. on the North, Bowery
            on the East, Worth St. on the South, and Lafayette St. on the West.
            We should also note that Chinatown spreads into Tribeca and the
            Lower East Side, so the Chinatown spots on this guide only include
            those not in the other two neighborhoods.
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
            your life. It also includes the spots from previous Everything Good
            guides on separate layers.
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

export default NolitaChinatownLittleItaly;
