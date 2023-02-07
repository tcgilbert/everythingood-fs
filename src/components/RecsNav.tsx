import type { Dispatch, SetStateAction } from "react";
import { MobileRecsNav } from "./MobileRecsNav";

interface Props {
  displayed: string;
  setDisplayed: Dispatch<SetStateAction<string>>;
}

export const RecsNav = (props: Props) => {
  const handleClass = (name: string) => {
    if (name === props.displayed) {
      return "w-1/4 border-b-2 border-red-500 py-4 px-1 text-center text-sm font-medium text-red-600";
    } else {
      return "w-1/4 border-b-2 border-transparent py-4 px-1 text-center text-sm font-medium text-gray-500 hover:cursor-pointer hover:border-red-500 hover:text-red-600";
    }
  };

  return (
    <div>
      <div className="sm:hidden">
        <MobileRecsNav
          displayed={props.displayed}
          setDisplayed={props.setDisplayed}
        />
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-t border-gray-400 bg-white">
          <nav className="-mb-px flex" aria-label="Tabs">
            <p
              className={handleClass("restaurants")}
              onClick={() => props.setDisplayed("restaurants")}
            >
              Restaurants
            </p>
            <p
              className={handleClass("bars")}
              onClick={() => props.setDisplayed("bars")}
            >
              Bars
            </p>
            <p
              className={handleClass("cafes")}
              onClick={() => props.setDisplayed("cafes")}
            >
              Cafes
            </p>
            <p
              className={handleClass("bakeriesAndDesserts")}
              onClick={() => props.setDisplayed("bakeriesAndDesserts")}
            >
              Bakeries & Dessert
            </p>
            <p
              className={handleClass("shops")}
              onClick={() => props.setDisplayed("shops")}
            >
              Shops
            </p>
            <p
              className={handleClass("groceriesAndLiquor")}
              onClick={() => props.setDisplayed("groceriesAndLiquor")}
            >
              Grocery & Liquor
            </p>
            <p
              className={handleClass("artGalleries")}
              onClick={() => props.setDisplayed("artGalleries")}
            >
              Art Galleries
            </p>
          </nav>
        </div>
      </div>
    </div>
  );
};
