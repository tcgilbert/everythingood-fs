import { useState } from "react";
import { guideText } from "../../lib/guideText";
import { api } from "../../utils/api";

interface CreateBarProps {
  guide: string;
}

export const CreateBar = ({ guide }: CreateBarProps) => {
  const [open, setOpen] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    name: "",
    description: "",
    price: "",
    idealGroupNumber: "",
    drinkSpecialty: "",
    food: "",
    link: "",
    note: "",
  });
  return (
    <>
      <h1 className="font-eb text-2xl">
        Bar: <span className="italic">{guideText(guide)}</span>
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div className=" flex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.name}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.price}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                price: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Ideal Group Number:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.idealGroupNumber}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                idealGroupNumber: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Drink Specialty:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.drinkSpecialty}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                drinkSpecialty: e.target.value,
              });
            }}
          />
        </div>
        <div className=" flex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Link:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.link}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                link: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Food:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.food}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                food: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-span-2 flex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={modalInputs.description}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                description: e.target.value,
              });
            }}
          />
        </div>
      </div>

      <div className="col-span-2 flex flex-col py-1">
        <label className="block text-sm font-medium text-gray-700">Note:</label>
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={modalInputs.note}
          onChange={(e) => {
            setModalInputs({
              ...modalInputs,
              note: e.target.value,
            });
          }}
        />
      </div>
      <div className="py-2" />
      <button
        onClick={() => {
          console.log("savedd!!!");
        }}
        className="w-full rounded-md border border-transparent bg-blue-200 py-2 px-4 text-sm font-medium text-blue-700 hover:bg-blue-400 hover:text-white"
      >
        Create Bar Entry
      </button>
    </>
  );
};
