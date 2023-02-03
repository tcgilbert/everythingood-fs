import {
  ArtGallery,
  BakeryAndDessert,
  Bar,
  Cafe,
  GroceryAndLiquor,
  Restaurant,
  Shop,
} from "@prisma/client";

interface AdminEntryProps {
  data:
    | Restaurant
    | Bar
    | Cafe
    | Shop
    | BakeryAndDessert
    | GroceryAndLiquor
    | ArtGallery;
}

export const AdminEntry = (props: AdminEntryProps) => {
  const { name } = props.data;

  return (
    <div className="col-span-1 mb-2 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="flex items-center justify-between p-2">
        <h3 className="font-robo text-2xl font-medium leading-6 text-gray-900">
          {name}
        </h3>
        <button className="rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Edit
        </button>
      </div>
    </div>
  );
};
