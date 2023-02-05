import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { AiOutlineCheck, AiOutlineDown } from "react-icons/ai";

interface Props {
  displayed: string;
  setDisplayed: Dispatch<SetStateAction<string>>;
}

export const MobileRecsNav = (props: Props) => {
  const [selected, setSelected] = useState(props.displayed);
  const handleMobileText = () => {
    switch (props.displayed) {
      case "restaurants":
        return "RESTAURANTS!";
      case "bars":
        return "BARS!";
      case "cafes":
        return "CAFES!";
      case "bakeriesAndDesserts":
        return "BAKERIES & DESSERT!";
      case "shops":
        return "SHOPS!";
      case "groceriesAndLiquor":
        return "GROCERY & LIQUOR!";
      case "artGalleries":
        return "ART GALLERIES!";
    }
  };

  const handleMobileSelection = (option: string) => {
    props.setDisplayed(option);
  };

  const handleClasses = (value: string) => {
    if (value === props.displayed) {
      return "cursor-default p-4 text-sm bg-gray-200";
    } else {
      return "cursor-pointer p-4 text-sm hover:bg-gray-200";
    }
  };

  return (
    <Listbox
      value={props.displayed}
      onChange={(option) => handleMobileSelection(option)}
    >
      {({ open }) => (
        <>
          <div className="border-t border-b border-gray-300 sm:hidden">
            <div className="flex divide-x divide-gray-600 rounded-md shadow-sm">
              <div className="flex w-full divide-x divide-gray-600 rounded-md shadow-sm">
                <div className="flex w-full items-center rounded-l-md border border-transparent bg-white py-2 pl-3 pr-4 text-gray-600 shadow-sm">
                  <p className="ml-2.5 font-robo text-xl font-medium">
                    {handleMobileText()}
                  </p>
                </div>
                <Listbox.Button className="flex items-center rounded-l-none rounded-r-md bg-white p-2 px-10 text-sm font-medium hover:bg-gray-200">
                  <AiOutlineDown className="h-5 w-5 text-gray-700" />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-1 w-full origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <Listbox.Option
                  className={handleClasses("restaurants")}
                  value="restaurants"
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p className="font-robo font-bold">Restaurants</p>
                      {props.displayed === "restaurants" && (
                        <span className="">
                          <AiOutlineCheck className="h-5 w-5 font-bold text-red-600" />
                        </span>
                      )}
                    </div>
                  </div>
                </Listbox.Option>

                <Listbox.Option className={handleClasses("bars")} value="bars">
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p className="font-robo font-bold">Bars</p>
                      {props.displayed === "bars" && (
                        <span className="">
                          <AiOutlineCheck className="h-5 w-5 font-bold text-red-600" />
                        </span>
                      )}
                    </div>
                  </div>
                </Listbox.Option>

                <Listbox.Option
                  className={handleClasses("cafes")}
                  value="cafes"
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p className="font-robo font-bold">Cafes</p>
                      {props.displayed === "cafes" && (
                        <span className="">
                          <AiOutlineCheck className="h-5 w-5 font-bold text-red-600" />
                        </span>
                      )}
                    </div>
                  </div>
                </Listbox.Option>

                <Listbox.Option
                  className={handleClasses("bakeriesAndDesserts")}
                  value="bakeriesAndDesserts"
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p className="font-robo font-bold">Bakeries & Dessert</p>
                      {props.displayed === "bakeriesAndDesserts" && (
                        <span className="">
                          <AiOutlineCheck className="h-5 w-5 font-bold text-red-600" />
                        </span>
                      )}
                    </div>
                  </div>
                </Listbox.Option>

                <Listbox.Option
                  className={handleClasses("shops")}
                  value="shops"
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p className="font-robo font-bold">Shops</p>
                      {props.displayed === "shops" && (
                        <span className="">
                          <AiOutlineCheck className="h-5 w-5 font-bold text-red-600" />
                        </span>
                      )}
                    </div>
                  </div>
                </Listbox.Option>

                <Listbox.Option
                  className={handleClasses("groceriesAndLiquor")}
                  value="groceriesAndLiquor"
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p className="font-robo font-bold">Groceries & Liquor</p>
                      {props.displayed === "groceriesAndLiquor" && (
                        <span className="">
                          <AiOutlineCheck className="h-5 w-5 font-bold text-red-600" />
                        </span>
                      )}
                    </div>
                  </div>
                </Listbox.Option>

                <Listbox.Option
                  className={handleClasses("artGalleries")}
                  value="artGalleries"
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p className="font-robo font-bold">Art Galleries</p>
                      {props.displayed === "artGalleries" && (
                        <span className="">
                          <AiOutlineCheck className="h-5 w-5 font-bold text-red-600" />
                        </span>
                      )}
                    </div>
                  </div>
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
