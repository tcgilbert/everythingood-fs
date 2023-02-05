import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import LowerEastSideMap from "../public/les-map.jpg";
import { useEffect, useRef, useState } from "react";
import { getStaticGuideData } from "../server/queries/guideData";
import { BiUpArrowAlt } from "react-icons/bi";

// components
import { GuideNav } from "../components/GuideNav";
import { GuideContent } from "../components/GuideContent";

export const getStaticProps = async () => {
  const data = await getStaticGuideData("les");

  return {
    props: {
      data,
    },
  };
};

const BlankPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="py-52" />
      <div className="mx-auto max-w-3xl">
        <Image
          src={LowerEastSideMap}
          priority={true}
          alt="Map of the Lower East Side"
          className="shadow-lg"
        />
      </div>
      <div className="py-52" />
      <div className="mx-auto max-w-3xl">
        <Image
          src={LowerEastSideMap}
          priority={true}
          alt="Map of the Lower East Side"
          className="shadow-lg"
        />
      </div>

      <GuideNav displayed={displayed} setDisplayed={setDisplayed} />
      <div ref={elementRef} className="my-3" />

      <button className="">
        <BiUpArrowAlt className="text-4xl text-black" />
      </button>

      <GuideContent displayed={displayed} data={data} />
    </div>
  );
};

export default BlankPage;
