import { useState } from "react";
import { api } from "../../utils/api";

interface CreateArtGalleryProps {
  guide: string;
}

export const CreateArtGallery = ({ guide }: CreateArtGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    name: "",
    link: "",
  });
  return (
    <>
      <h1>Art Gallery for {guide}</h1>
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
      </div>

      <div className="py-2" />
      <button
        onClick={() => {
          console.log("savedd!!!");
        }}
        className="w-full rounded-md border border-transparent bg-blue-200 py-2 px-4 text-sm font-medium text-blue-700 hover:bg-blue-400 hover:text-white"
      >
        Save
      </button>
    </>
  );
};
