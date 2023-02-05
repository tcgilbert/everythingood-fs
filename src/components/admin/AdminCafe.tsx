import { Dialog, Transition } from "@headlessui/react";
import { Cafe } from "@prisma/client";
import { Fragment, useState } from "react";
import { api } from "../../utils/api";

interface AdminEntryProps {
  data: Cafe;
  refetch: () => void;
}

export const AdminCafe = ({ data, refetch }: AdminEntryProps) => {
  const [open, setOpen] = useState(false);
  const [modalInputs, setModalInputs] = useState({ ...data });
  const { name } = data;
  const [deleteSelected, setDeleteSelected] = useState(false);

  // api calls
  const { mutateAsync: updateEntry } = api.guide.patchCafe.useMutation();
  const { mutateAsync: deleteEntry } = api.guide.deleteCafe.useMutation();

  const handleClick = () => {
    setOpen(true);
  };

  const handleDelete = async () => {
    if (deleteSelected) {
      // delete entry
      console.log("deleting!!!!!!");
      await deleteEntry({ id: data.id });
      setOpen(false);
      refetch();
      setTimeout(() => {
        if (deleteSelected) setDeleteSelected(false);
      }, 300);
    } else {
      setDeleteSelected(true);
      setOpen(true);
    }
  };

  const handleUpdate = async () => {
    const payload = { ...modalInputs };
    await updateEntry(payload);
    refetch();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      if (deleteSelected) setDeleteSelected(false);
    }, 300);
    setTimeout(() => {
      setModalInputs({ ...data });
    }, 1000);
  };

  const handleModalContent = () => {
    if (deleteSelected) {
      return (
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">
            Are you sure you want to delete:{" "}
            <span className="italic">{name}</span>?
          </h1>
          <button
            onClick={handleDelete}
            className="rounded-md border bg-red-600 px-11 py-3 text-lg font-medium text-white transition duration-150 ease-in-out hover:bg-red-500"
          >
            DELETE
          </button>
        </div>
      );
    } else {
      return (
        <>
          {" "}
          <div className="grid grid-cols-2 gap-2">
            {/* insert data */}
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
            <div className=" col-span-2 flex flex-col py-1">
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
            <div className="col-span-2 flex flex-col py-1">
              <label className="block text-sm font-medium text-gray-700">
                Note:
              </label>
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
          </div>
          <div className="py-2" />
          <button
            onClick={handleUpdate}
            className="w-full rounded-md border border-transparent bg-blue-200 py-2 px-4 text-sm font-medium text-blue-700 transition duration-150 ease-in-out hover:bg-blue-400 hover:text-white"
          >
            Save
          </button>
        </>
      );
    }
  };

  return (
    <div className="col-span-1 mb-2 overflow-hidden border border-gray-100 bg-white py-1 shadow sm:rounded-lg">
      <div className="flex items-center justify-between p-2">
        <h3 className="font-robo text-2xl font-medium leading-6 text-gray-900">
          {name}
        </h3>
        <div className="grid grid-cols-11">
          <button
            onClick={handleClick}
            className="col-span-5 rounded-md border border-transparent px-2 text-sm font-medium text-gray-700 transition duration-75 ease-in-out hover:bg-gray-100 hover:text-blue-600"
          >
            Edit
          </button>
          <span className="col-span-1 text-center text-gray-300">|</span>
          <button
            onClick={handleDelete}
            className="col-span-5 rounded-md border border-transparent px-2 text-sm font-medium text-gray-700 transition duration-75 ease-in-out hover:bg-gray-100 hover:text-red-500"
          >
            Delete
          </button>
        </div>
      </div>
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
                <Dialog.Panel className="relative w-3/4 transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all">
                  {handleModalContent()}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
