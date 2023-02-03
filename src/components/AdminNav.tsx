import { Dispatch, SetStateAction } from "react";

interface Props {
  displayed: string;
  setDisplayed: Dispatch<SetStateAction<string>>;
  guide: string;
  setGuide: Dispatch<SetStateAction<string>>;
}

export const AdminNav = (props: Props) => {
  const handleClass = (name: string) => {
    if (name === props.guide) {
      switch (name) {
        case "les":
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-indigo-200 text-indigo-700";
        case "soho-noho":
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-green-200 text-green-700";
        case "nolita-chinatown-little-italy":
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-red-200 text-red-700";
        default:
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-indigo-200 text-indigo-700";
      }
    } else {
      return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium text-gray-500 hover:cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <div>
      <div className="ml-2 flex w-3/4">
        <p className={handleClass("les")} onClick={() => props.setGuide("les")}>
          on the Lower East Side
        </p>
        <p
          className={handleClass("soho-noho")}
          onClick={() => props.setGuide("soho-noho")}
        >
          in Soho and Noho
        </p>
        <p
          className={handleClass("nolita-chinatown-little-italy")}
          onClick={() => props.setGuide("nolita-chinatown-little-italy")}
        >
          in Nolita, Chinatown, and Little Italy
        </p>
        <div className="ml-2">
          <select
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Restaurants"
          >
            <option>Restaurants</option>
            <option>Bars</option>
            <option>Cafes</option>
            <option>Bakeries and Dessert</option>
            <option>Grocery and Liquor</option>
            <option>Shops</option>
            <option>Art Galleries</option>
          </select>
        </div>
      </div>
    </div>
  );
};
