import { Transition, Dialog } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Subscribe } from "./Subscribe";
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";

export const HomeNav = () => {
  const [open, setOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

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
      {/* Subscribe Notification */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={showNotification}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <AiOutlineCheckCircle
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Successfully Subscribed!
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Stay tuned for updates
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShowNotification(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <AiOutlineClose className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      {/* Subscribe Input Modal */}
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
                <Dialog.Panel className="relative w-1/2 transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all">
                  <Subscribe
                    setOpen={setOpen}
                    setShowNotification={setShowNotification}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
