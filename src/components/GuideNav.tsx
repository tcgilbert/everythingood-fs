import { Dispatch, SetStateAction } from "react";

interface Props {
  displayed: string;
  setDisplayed: Dispatch<SetStateAction<string>>;
}

export const GuideNav = (props: Props) => {
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
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue="Restaurants"
          onChange={(e) => props.setDisplayed(e.target.value)}
        >
          <option value="restaurants">Restaurants</option>
          <option value="bars">Bars</option>
          <option value="cafes">Cafes</option>
          <option value="bakeriesAndDesserts">Bakeries and Dessert</option>
          <option value="shops">Shops</option>
          <option value="groceriesAndLiquor">Grocery and Liquor</option>
          <option value="artGalleries">Art Galleries</option>
        </select>
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
              Bakeries and Dessert
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
              Grocery and Liquor
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
