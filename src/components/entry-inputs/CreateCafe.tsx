import { type Dispatch, type SetStateAction, useState } from "react";
import { guideText } from "../../lib/guideText";
import { api } from "../../utils/api";

interface CreateCafeProps {
  guideInput: string;
  refetch: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setGuide: Dispatch<SetStateAction<string>>;
  setDisplayed: Dispatch<SetStateAction<string>>;
}

export const CreateCafe = ({
  guideInput,
  refetch,
  setOpen,
  setGuide,
  setDisplayed,
}: CreateCafeProps) => {
  const [modalInputs, setModalInputs] = useState({
    name: "",
    description: "",
    coffeeBeans: "",
    specialty: "",
    bakedGoods: "",
    roomToHang: "",
    link: "",
    note: "",
  });

  const { mutateAsync: createEntry } = api.guide.createCafe.useMutation();

  const validateInputs = () => {
    if (modalInputs.name === "") {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const payload = { ...modalInputs, guide: guideInput };
    if (!validateInputs()) {
      alert('"Name" is required');
      return;
    }
    await createEntry(payload);
    refetch();
    setDisplayed("cafes");
    setGuide(guideInput);
    setOpen(false);
  };

  return (
    <>
      <h1 className="font-eb text-2xl">
        Cafe: <span className="italic">{guideText(guideInput)}</span>
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
        <div className="coflex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Coffee Beans:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.coffeeBeans}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                coffeeBeans: e.target.value,
              });
            }}
          />
        </div>
        <div className="coflex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Room to Hang:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.roomToHang}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                roomToHang: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Baked Goods:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.bakedGoods}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                bakedGoods: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-span-2 flex flex-col py-1">
          <label className="block text-sm font-medium text-gray-700">
            Specialty:
          </label>
          <input
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={modalInputs.specialty}
            onChange={(e) => {
              setModalInputs({
                ...modalInputs,
                specialty: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-span-2 flex flex-col py-1">
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
          void handleSubmit();
        }}
        className="w-full rounded-md border border-transparent bg-blue-200 py-2 px-4 text-sm font-medium text-blue-700 transition duration-150 ease-in-out hover:bg-blue-400 hover:text-white"
      >
        Create Cafe Entry
      </button>
    </>
  );
};
