import { Dialog, Transition } from "@headlessui/react";
import { type Dispatch, Fragment, type SetStateAction, useState } from "react";

import { CreateRestaurant } from "../entry-inputs/CreateRestaurant";
import { CreateBar } from "../entry-inputs/CreateBar";
import { CreateCafe } from "../entry-inputs/CreateCafe";
import { CreateBakeryAndDessert } from "../entry-inputs/CreateBakeryAndDessert";
import { CreateGroceryAndLiquor } from "../entry-inputs/CreateGroceryAndLiquor";
import { CreateShop } from "../entry-inputs/CreateShop";
import { CreateArtGallery } from "../entry-inputs/CreateArtGallery";

interface CreateEntryProps {
  refetch: () => void;
  setGuide: Dispatch<SetStateAction<string>>;
  setDisplayed: Dispatch<SetStateAction<string>>;
}

export const CreateEntry = ({
  refetch,
  setGuide,
  setDisplayed,
}: CreateEntryProps) => {
  const [open, setOpen] = useState(false);
  const [guideInput, setGuideInput] = useState("les");
  const [type, setType] = useState("restaurants");
  const [typesSelected, setTypesSelected] = useState(false);

  const handleClick = () => {
    if (typesSelected) {
      setTypesSelected(false);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelected = () => {
    switch (type) {
      case "restaurants":
        return (
          <CreateRestaurant
            setOpen={setOpen}
            refetch={refetch}
            guideInput={guideInput}
            setGuide={setGuide}
            setDisplayed={setDisplayed}
          />
        );
      case "bars":
        return (
          <CreateBar
            setOpen={setOpen}
            refetch={refetch}
            guideInput={guideInput}
            setGuide={setGuide}
            setDisplayed={setDisplayed}
          />
        );
      case "cafes":
        return (
          <CreateCafe
            setOpen={setOpen}
            refetch={refetch}
            guideInput={guideInput}
            setGuide={setGuide}
            setDisplayed={setDisplayed}
          />
        );
      case "bakeriesAndDesserts":
        return (
          <CreateBakeryAndDessert
            setOpen={setOpen}
            refetch={refetch}
            guideInput={guideInput}
            setGuide={setGuide}
            setDisplayed={setDisplayed}
          />
        );
      case "groceriesAndLiquor":
        return (
          <CreateGroceryAndLiquor
            setOpen={setOpen}
            refetch={refetch}
            guideInput={guideInput}
            setGuide={setGuide}
            setDisplayed={setDisplayed}
          />
        );
      case "shops":
        return (
          <CreateShop
            setOpen={setOpen}
            refetch={refetch}
            guideInput={guideInput}
            setGuide={setGuide}
            setDisplayed={setDisplayed}
          />
        );
      case "artGalleries":
        return (
          <CreateArtGallery
            setOpen={setOpen}
            refetch={refetch}
            guideInput={guideInput}
            setGuide={setGuide}
            setDisplayed={setDisplayed}
          />
        );
      default:
        null;
    }
  };

  const handleDisplay = () => {
    if (!typesSelected) {
      return (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="guide">Guide:</label>
              <select
                id="guide"
                name="guide"
                className="block w-full rounded-md border-gray-300 bg-gray-200 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={guideInput}
                onChange={(e) => setGuideInput(e.target.value)}
              >
                <option value="les">on The Lower East Side</option>
                <option value="soho-noho">in Soho and Noho</option>
                <option value="nolita-chinatown-littleitaly">
                  in Nolita, Chinatown, and Little Italy
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="guide">Type:</label>
              <select
                id="guide"
                name="guide"
                className="block w-full rounded-md border-gray-300 bg-gray-200 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="restaurants">Restaurants</option>
                <option value="bars">Bars</option>
                <option value="cafes">Cafes</option>
                <option value="bakeriesAndDesserts">Bakeries & Dessert</option>
                <option value="groceriesAndLiquor">Groceries & Liquor</option>
                <option value="shops">Shops</option>
                <option value="artGalleries">Art Galleries</option>
              </select>
            </div>
          </div>
          <div className="py-3" />
          <button
            onClick={() => setTypesSelected(true)}
            className="w-full rounded-md border border-transparent bg-blue-200 py-2 px-4 text-sm font-medium text-blue-700 transition duration-150 ease-in-out hover:bg-blue-400 hover:text-white"
          >
            Next
          </button>
        </>
      );
    } else {
      return <>{handleSelected()}</>;
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-400 hover:text-white"
      >
        Create Entry
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-1/2 transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all">
                  {handleDisplay()}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
