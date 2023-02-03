import { Bar } from "@prisma/client";
import { BiMap } from "react-icons/bi";

interface Props {
  bar: Bar;
}

export const BarComponent = (props: Props) => {
  const { bar } = props;
  const {
    name,
    description,
    drinkSpecialty,
    food,
    guide,
    idealGroupNumber,
    link,
    note,
    price,
  } = bar;

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
        <span className="mx-1 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
          {idealGroupNumber} people
        </span>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">
              {description}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Drink Specialty
            </dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">
              {drinkSpecialty}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Food</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">{food}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Note</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">{note}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
