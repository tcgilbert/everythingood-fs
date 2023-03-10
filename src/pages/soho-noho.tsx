import { type InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import SohoNohoMap from "../public/sohonoho-map.jpg";

import { getStaticGuideData } from "../server/queries/guideData";

// components
import { RecsNav } from "../components/RecsNav";
import { GuideContent } from "../components/GuideContent";
import { LoaderLink } from "../components/LoaderLink";

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
  const [showButton, setShowButton] = useState(false);
  const elementRef = useRef<HTMLInputElement>(null);
  const [lesLoading, setLesLoading] = useState(false);
  const [homeLoading, setHomeLoading] = useState(false);
  const [nolitaLoading, setNolitaLoading] = useState(false);

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
        <div className="sticky top-0 z-50 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="rounded-b-md bg-white shadow-md">
            {" "}
            <h1 className="pt-5 text-center font-eb text-6xl font-medium">
              Everything Good
            </h1>
            <p className="mt-1 text-center font-robo text-2xl font-normal">
              in Soho and Noho
            </p>
            <div className="py-2" />
            <div className="mx-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <LoaderLink
                className="flex items-center justify-center rounded-md bg-gray-100 px-3 py-2 text-center text-sm font-medium text-gray-900 transition duration-150 ease-in-out hover:cursor-pointer hover:bg-gray-200"
                href="/"
                loading={homeLoading}
                setLoading={setHomeLoading}
              >
                Home
              </LoaderLink>
              <LoaderLink
                className="flex items-center justify-center rounded-md bg-indigo-100 px-3 py-2 text-center text-sm font-medium text-indigo-700 transition duration-150 ease-in-out hover:cursor-pointer hover:bg-indigo-200"
                href="/les"
                loading={lesLoading}
                setLoading={setLesLoading}
              >
                on the Lower East Side
              </LoaderLink>
              <LoaderLink
                className="flex items-center justify-center rounded-md bg-red-100 px-3 py-2 text-center text-sm font-medium text-red-700 transition duration-150 ease-in-out hover:cursor-pointer hover:bg-red-200"
                href="/nolita-chinatown-littleitaly"
                loading={nolitaLoading}
                setLoading={setNolitaLoading}
              >
                in Nolita, Chinatown, and Little Italy
              </LoaderLink>
            </div>
            <div className="py-2" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* intro */}
          <div className="py-3" />
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-center font-eb text-lg">
                <span className="font-eb text-red-500">
                  Don&rsquo;t worry.{" "}
                </span>
                This is not a list of the best spots to get street-styled or a
                manual for bribing the Balthazar ma??tre d&rsquo; or best
                practices for securing NikeLab releases or a map of where the
                Jenners and Hadids have apartments.{" "}
                <span className="font-eb text-red-500">
                  It&rsquo;s (hopefully) not eye roll material.
                </span>
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                <span className="font-eb text-red-500">
                  Everything Good is a very thorough guide to neighborhoods in
                  NYC.{" "}
                </span>
                They are complete, single-source dockets meant to give you 360
                degree recommendations that span the entirety of a neighborhood,
                and this is quite literally a guide to everything good in the
                fashionable, see-and-be-seen, sometimes crowded, oftentimes
                insufferable neighborhoods of SoHo and NoHo. It Includes
                everything from art galleries to bakeries to coffee shops to
                clothing boutiques to bars and restaurants. And while
                there&rsquo;s a lot of noise in these two neighborhoods, they
                are also home to some of the best food and shopping in all of
                NYC.
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                Anyway, this is the second installment of Everything Good.
                <span className="font-eb text-red-500">
                  You can find the first guide to the LES right here. There will
                  be many more.
                </span>
                I&rsquo;m the only person writing and gathering these
                recommendations, so if you do not see a spot (well-known or not)
                on this list, it might be because I don&rsquo;t know it. But
                most likely, it&rsquo;s because I don&rsquo;t really like it.
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                As you may have noticed, this guide is not a design object.
                It&rsquo;s a Google Doc. I could have tried harder to make this
                look cool, but I didn&rsquo;t. The point is just to give you
                recommendations as directly as possible. There are some iPhone
                photos to give added flavor to these recommendations, which are
                broken down by categories and presented with information I think
                is important to know about each spot. This is a long list.
                <span className="font-eb text-red-500">
                  More is (allegedly) more.
                </span>
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                For this installment of Everything Good, I am keeping access
                free, but I&rsquo;d love it if you could make a donation to{" "}
                <a
                  className="text-red-600"
                  href="https://give.glwd.org/give/244921/?&_ga=2.82856336.720855393.1659365992-1819495194.1658185824&_gac=1.152424907.1659365992.Cj0KCQjw852XBhC6ARIsAJsFPN2ROn8IwnasS4uPZ7g5p2G1i2Dm1jOOEHF6rAXr9556xlUoF4Cy8aMaAjprEALw_wcB#!/donation/checkout?c_src=WS&c_src2=BU"
                >
                  God&rsquo;s Love We Deliver
                </a>
                , an amazing secular charity in SoHo that provides nutritious
                meals for New Yorkers that are too sick or elderly to cook for
                themselves. They&rsquo;ve done fantastic work in NYC since 1985
                and have been at home in SoHo since 2015. If you&rsquo;re using
                this list, please donate!
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                I hope you find this list useful. It might not be. Either way,
                share it with your friends, donate, support these businesses,
                and have an excellent day in SoHo and NoHo. Cheers!
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                <a
                  href="https://www.instagram.com/alex_delany/"
                  className="font-eb text-red-500 underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  ??? Alex Delany
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
                {
                  "OK, OK, OK. First off, when I say NoHo and SoHo, I mean the space outlined in black above, including Hudson Square. I&rsquo;m not saying you didn't know where these neighborhoods are. But now we definitely 100% all know where they are. "
                }
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                Also, if you&rsquo;re like???WAIT, there should be a Google Map
                with all these spots on it, dude!???do not fear. That map exists
                at{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-500"
                  href="https://www.google.com/maps/d/u/0/viewer?mid=1Tzl_UVT88u__ZH6bTqHHRu8TWsdS2Lc&ll=40.72072746815181%2C-73.99705300000002&z=15"
                >
                  this link right here
                </a>
                , so you can have it handy whenever you&rsquo;re running around
                living your life. It also includes the spots from previous
                Everything Good Guides on separate layers.
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                Also???this should go without saying, but???you know???treat ALL
                hospitality workers with kindness, respect, and understanding.
                Tip at least 20%. Tip for your coffee. Tip for your drinks.
                Always. A good relationship in any hospitality environment is a
                two-way street.{" "}
              </p>
              <div className="py-3" />
              <p className="text-center font-eb text-lg">
                Great. Now that we&rsquo;re all on the same page, let&rsquo;s
                get into it???
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

export default SohoNoho;
