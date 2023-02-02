import { Restaurant } from "@prisma/client";

interface Props {
  restaurant: Restaurant;
  key: string;
}

export const RestaurantComponent = (props: Props) => {
  const { restaurant, key } = props;
  const {
    name,
    alsoGreat,
    bestThingOnTheMenu,
    description,
    drinkOrder,
    guide,
    idealGroupNumber,
    idealMeal,
    link,
    note,
    price,
  } = restaurant;

  return (
    <div className="col-span-1 mb-2 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="font-robo text-2xl font-medium leading-6 text-gray-900">
          {name}
        </h3>
        <div className="py-1" />
        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
          {price}
        </span>
        <span className="mx-1 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
          {idealGroupNumber} people
        </span>
        <span className="mx-1 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
          {idealMeal}
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
              Best thing on the menu
            </dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">
              {bestThingOnTheMenu}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Also Great</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">{alsoGreat}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Drink Order</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">{drinkOrder}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Note</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">{note}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
