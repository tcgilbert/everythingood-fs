import { type BakeryAndDessert } from "@prisma/client";
import { BiMap } from "react-icons/bi";

interface Props {
  bakeryAndDessert: BakeryAndDessert;
}

export const BakeryAndDessertComponent = (props: Props) => {
  const { bakeryAndDessert } = props;
  const {
    name,
    description,
    note,
    alsoGreat,
    bestThingOnTheMenu,
    price,
    roomToHang,
  } = bakeryAndDessert;

  return (
    <div className="col-span-1 mb-2 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex justify-between">
          <h3 className="font-robo text-2xl font-medium leading-6 text-gray-900">
            {name}
          </h3>
          <a href="" className="text-2xl">
            <BiMap className="hover:text-red-600" />
          </a>
        </div>
        <div className="py-1" />
        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
          {price}
        </span>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-red-500">About</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">
              {description}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-red-500">
              Best thing on the menu
            </dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">
              {bestThingOnTheMenu}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-red-500">Also Great</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">{alsoGreat}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-red-500">Room to Hang</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">{roomToHang}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-red-500">Note</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">{note}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
