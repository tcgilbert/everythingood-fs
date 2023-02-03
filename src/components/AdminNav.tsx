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
        case "nolita-chinatown-little-italy":
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-red-100 text-red-700";
        default:
          return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium bg-indigo-100 text-indigo-700";
      }
    } else {
      return "px-3 py-2 font-medium text-sm rounded-md text-center text-sm font-medium text-gray-500 hover:cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <div>
      <div className="">
        <div className="">
          <nav className="-mb-px flex" aria-label="Tabs">
            <p
              className={handleClass("les")}
              onClick={() => props.setGuide("les")}
            >
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
          </nav>
        </div>
      </div>
    </div>
  );
};
