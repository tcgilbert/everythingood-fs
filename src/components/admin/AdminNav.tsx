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
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-indigo-100 text-indigo-700";
        case "soho-noho":
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-green-100 text-green-700";
        case "nolita-chinatown-littleitaly":
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-red-100 text-red-700";
        default:
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-indigo-100 text-indigo-700";
      }
    } else {
      return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium text-white hover:cursor-pointer text-gray-500 hover:text-white hover:bg-gray-800";
    }
  };

  return (
    <div className="border-b border-gray-900 bg-gray-900 pb-4">
      <div className="ml-2 flex w-3/4 items-center">
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
          className={handleClass("nolita-chinatown-littleitaly")}
          onClick={() => props.setGuide("nolita-chinatown-littleitaly")}
        >
          in Nolita, Chinatown, and Little Italy
        </p>
        <div className="ml-2">
          <select
            id="location"
            name="location"
            className="block w-full rounded-md border-gray-300 bg-gray-200 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Restaurants"
            onChange={(e) => props.setDisplayed(e.target.value)}
            value={props.displayed}
          >
            <option value="restaurants">Restaurants</option>
            <option value="bars">Bars</option>
            <option value="cafes">Cafes</option>
            <option value="bakeriesAndDesserts">Bakeries & Dessert</option>
            <option value="groceriesAndLiquor">Grocery & Liquor</option>
            <option value="shops">Shops</option>
            <option value="artGalleries">Art Galleries</option>
          </select>
        </div>
      </div>
    </div>
  );
};
