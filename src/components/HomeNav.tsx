import { Transition, Dialog } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const HomeNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto grid grid-cols-1 gap-4">
      <Link
        href="/les"
        className="text-md rounded-md border border-indigo-100 bg-indigo-100 px-3 py-3 text-center font-medium text-indigo-700 hover:border-indigo-700"
      >
        on the Lower East Side
      </Link>
      <Link
        href="/soho-noho"
        className="text-md rounded-md border border-green-100 bg-green-100 px-3 py-3 text-center font-medium text-green-700 hover:border-green-700"
      >
        in Soho and Noho
      </Link>
      <Link
        href="/nolita-chinatown-littleitaly"
        className="text-md rounded-md border border-red-100 bg-red-100 px-3 py-3 text-center font-medium text-red-700 hover:border-red-700"
      >
        in Nolita, Chinatown, and Little Italy
      </Link>
      <button
        onClick={() => setOpen(true)}
        className="text-md rounded-md border bg-gray-100 px-3 py-3 text-center font-medium text-gray-900 hover:border-gray-500"
      >
        Subscribe to the Newsletter
      </button>
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
                  <div>Subscribe Yo!!!!</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
