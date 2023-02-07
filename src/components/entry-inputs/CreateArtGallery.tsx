import { type Dispatch, type SetStateAction, useState } from "react";
import { api } from "../../utils/api";
import { guideText } from "../../lib/guideText";

interface CreateArtGalleryProps {
  guideInput: string;
  refetch: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setGuide: Dispatch<SetStateAction<string>>;
  setDisplayed: Dispatch<SetStateAction<string>>;
}

export const CreateArtGallery = ({
  guideInput,
  refetch,
  setOpen,
  setGuide,
  setDisplayed,
}: CreateArtGalleryProps) => {
  const [modalInputs, setModalInputs] = useState({
    name: "",
    link: "",
  });

  const { mutateAsync: createEntry } = api.guide.createArtGallery.useMutation();

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
    setDisplayed("artGalleries");
    setGuide(guideInput);
    setOpen(false);
  };

  return (
    <>
      <h1 className="font-eb text-2xl">
        Art Gallery: <span className="italic">{guideText(guideInput)}</span>
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
          void handleSubmit();
        }}
        className="w-full rounded-md border border-transparent bg-blue-200 py-2 px-4 text-sm font-medium text-blue-700 transition duration-150 ease-in-out hover:bg-blue-400 hover:text-white"
      >
        Create Art Gallery Entry
      </button>
    </>
  );
};
