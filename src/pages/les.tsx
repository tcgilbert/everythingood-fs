import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import LowerEastSideMap from "../public/les-map.jpg";
import { useEffect, useRef, useState } from "react";
import { getStaticGuideData } from "../server/queries/guideData";
import { BiUpArrowAlt } from "react-icons/bi";

// components
import { RecsNav } from "../components/RecsNav";
import { GuideContent } from "../components/GuideContent";
import Link from "next/link";

export const getStaticProps = async () => {
  const data = await getStaticGuideData("les");

  return {
    props: {
      data,
    },
  };
};

const Les = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [displayed, setDisplayed] = useState("restaurants");
  const [showButton, setShowButton] = useState(false);
  const elementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setShowButton(rect.bottom <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  const handleClick = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <div className="sticky top-0 z-50 mx-auto rounded-md bg-white shadow-md sm:px-6 lg:px-8">
          <h1 className="pt-5 text-center font-eb text-6xl font-bold">
            Everything Good
          </h1>
          <p className="mt-1 text-center font-robo text-2xl font-normal">
            on the Lower East Side
          </p>
          <div className="py-2" />
          <div className="mx-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              className="rounded-md bg-gray-200 px-3 py-2 text-center text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:cursor-pointer hover:bg-blue-300 hover:text-blue-700"
              href="/"
            >
              Home
            </Link>
            <Link
              className="rounded-md bg-gray-200 px-3 py-2 text-center text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:cursor-pointer hover:bg-green-300 hover:text-green-700"
              href="/soho-noho"
            >
              in Soho and Noho
            </Link>
            <Link
              className="rounded-md bg-gray-200 px-3 py-2 text-center text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:cursor-pointer hover:bg-red-300 hover:text-red-700"
              href="/nolita-chinatown-littleitaly"
            >
              in Nolita, Chinatown, and Little Italy
            </Link>
          </div>
          <div className="py-2" />
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-3" />
          <div className="overflow-hidden rounded-t-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-center font-eb text-lg">
                <span className="font-eb text-red-500">Don’t worry. </span>
                This is not a screenplay about a Gen Z creative or a pitch about
                a Dimes Square reality TV show or a press release about a luxury
                brand making $900 bags from old takeout menus or something
                useless like that.{" "}
                <span className="font-eb text-red-500">
                  It’s (hopefully) not eye roll material.
                </span>
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                This is quite literally a guide to everything good in the LES
                and Two Bridges, from art galleries to bakeries to coffee shops
                to clothing boutiques to bars and restaurants.{" "}
                <span className="font-eb text-red-500">
                  Everything Good is a very thorough guide to neighborhoods in
                  NYC.{" "}
                </span>
                It is a complete, single-source docket meant to give you 360
                degree recommendations that span the entirety of a neighborhood.
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                This is the first installment of Everything Good.
                <span className="font-eb text-red-500">
                  {" "}
                  There will be many more.{" "}
                </span>
                I’m the only person writing and gathering these recommendations.
                If you do not see a spot (well-known or not) on this list, it
                might be because I don’t know it. But most likely, it’s because
                I don’t really like it.
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                As you may have noticed, this guide is not a design object. It’s
                a Google Doc. I could have tried harder to make this look cool,
                but I didn’t. TBH, my Adobe Suite subscription expired. There
                are some iPhone photos to give added flavor to these
                recommendations, which are broken down by categories and
                presented with information I think is important to know about
                each spot. This is a long list. More is (allegedly) more.
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                I thought about charging a small fee for this information, but
                instead, for the first installment, I’d love it if you could
                make a donation to the Henry Street Settlement, an amazing
                charity in the LES that provides childcare, cultural
                programming, housing, art classes, health care, and social
                services for LES residents in need. If you’re using this list,
                please donate!
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                I hope you find this list useful. It might not be. Either way,
                share it with your friends, donate, support these businesses,
                and have an excellent day in the LES. Cheers!
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
                  src={LowerEastSideMap}
                  priority={true}
                  alt="Map of the Lower East Side"
                  className="shadow-lg"
                />
              </div>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                OK, OK, OK. First off, when I say the LES and Two Bridges I mean
                the space outlined in black above. East of The Bowery. South of
                Houston. West of the FDR. And North of the Brooklyn Bridge. I’m
                not saying you didn't know that. But now we definitely 100% all
                know that.{" "}
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
                hospitality workers with kindness, respect, and understanding.
                Tip at least 20%. Tip for your coffee. Tip for your drinks.
                Always. A good relationship in any hospitality environment is a
                two-way street.{" "}
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                Great. Now that we’re all on the same page, let’s get into it…
              </p>
            </div>
          </div>
          <div ref={elementRef} className="" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <RecsNav displayed={displayed} setDisplayed={setDisplayed} />
        <div className="py-3" />
        {showButton ? (
          <button
            onClick={handleClick}
            className="hover:scale-98 fixed right-10 bottom-5 cursor-pointer rounded-lg border border-gray-500 bg-white p-3 text-black opacity-100 shadow-xl transition-opacity duration-300 ease-in hover:translate-x-[.05rem] hover:translate-y-[.05rem] hover:transform hover:opacity-100 hover:shadow-sm"
          >
            <BiUpArrowAlt className="text-4xl text-black" />
          </button>
        ) : (
          <button className="hover:scale-98 fixed right-10 bottom-5 cursor-default rounded-lg border border-gray-500 bg-white p-3 text-black opacity-0 shadow-xl transition-opacity duration-300 ease-in">
            <BiUpArrowAlt className="text-4xl text-black" />
          </button>
        )}

        <GuideContent displayed={displayed} data={data} />
      </div>
    </>
  );
};

export default Les;
