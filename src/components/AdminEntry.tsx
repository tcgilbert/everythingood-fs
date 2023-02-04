import { Dialog, Transition } from "@headlessui/react";
import {
  ArtGallery,
  BakeryAndDessert,
  Bar,
  Cafe,
  GroceryAndLiquor,
  Restaurant,
  Shop,
} from "@prisma/client";
import { Fragment, useState } from "react";

interface AdminEntryProps {
  data:
    | Restaurant
    | Bar
    | Cafe
    | Shop
    | BakeryAndDessert
    | GroceryAndLiquor
    | ArtGallery;
}

export const AdminEntry = (props: AdminEntryProps) => {
  const [open, setOpen] = useState(false);
  const { name } = props.data;

  const handleClick = () => {
    setOpen(true);
  };

  function handleModalInputs(key: string, value: string) {
    switch (key) {
      case "name":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "description":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              rows={4}
              name="comment"
              id="comment"
              className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={value}
            />
          </div>
        );
      case "price":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Price:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "idealGroupNumber":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Ideal Group Number
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "bestThingOnTheMenu":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Best Thing on the Menu:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "idealMeal":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Ideal Meal:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "alsoGreat":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Also Great:
            </label>
            <textarea
              rows={4}
              name="comment"
              id="comment"
              className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={value}
            />
          </div>
        );
      case "note":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Note:
            </label>
            <textarea
              rows={4}
              name="comment"
              id="comment"
              className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={value}
            />
          </div>
        );
      case "link":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Link:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "drinkOrder":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Drink Order:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "drinkSpecialty":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Drink Specialty:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "food":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Food:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "coffeeBeans":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Coffee Beans:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "roomToHang":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Room to Hang:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "specialty":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Specialty:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      case "bakedGoods":
        return (
          <div key={key} className="flex flex-col py-1">
            <label className="block text-sm font-medium text-gray-700">
              Baked Goods:
            </label>
            <input
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              value={value}
            />
          </div>
        );
      default:
        return null;
    }
  }

  function RenderObject(entry: object) {
    return (
      <div>
        {Object.entries(entry).map(([key, value]) =>
          handleModalInputs(key, value)
        )}
      </div>
    );
  }

  return (
    <div className="col-span-1 mb-2 overflow-hidden border border-red-100 bg-white shadow sm:rounded-lg">
      <div className="flex items-center justify-between p-2">
        <h3 className="font-robo text-2xl font-medium leading-6 text-gray-900">
          {name}
        </h3>
        <button
          onClick={handleClick}
          className="rounded-md border border-transparent bg-gray-500 py-1 px-4 text-sm font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Edit
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                <Dialog.Panel className="relative w-3/4 transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all">
                  {props.data && RenderObject(props.data)}
                  <button className=" my-3 rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Save
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
