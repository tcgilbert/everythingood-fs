import { GroceryAndLiquor } from "@prisma/client";
import { BiMap } from "react-icons/bi";

interface Props {
  groceryAndLiquor: GroceryAndLiquor;
}

export const GroceryAndLiquorComponent = (props: Props) => {
  const { groceryAndLiquor } = props;
  const { name, description, guide, link } = groceryAndLiquor;

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
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 font-eb text-lg text-gray-900">
              {description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
