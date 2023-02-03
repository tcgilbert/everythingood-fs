import { Cafe } from "@prisma/client";
import { BiMap } from "react-icons/bi";

interface Props {
  cafe: Cafe;
}

export const CafeComponent = (props: Props) => {
  const { cafe } = props;
  const {
    name,
    description,
    guide,
    link,
    note,
    bakedGoods,
    coffeeBeans,
    roomToHang,
  } = cafe;

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
            <dt className="text-sm font-medium text-red-500">Baked Goods</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">{bakedGoods}</dd>
          </div>
          {coffeeBeans && (
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-red-500">Coffee Beans</dt>
              <dd className="mt-1 font-eb text-lg text-gray-900">
                {coffeeBeans}
              </dd>
            </div>
          )}
          {note && (
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-red-500">Note</dt>
              <dd className="mt-1 font-eb text-lg text-gray-900">{note}</dd>
            </div>
          )}
          {roomToHang && (
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-red-500">Room to hang</dt>
              <dd className="mt-1 font-eb text-lg text-gray-900">
                {roomToHang}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};
