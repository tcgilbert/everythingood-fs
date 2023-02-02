import { type NextPage } from "next";

export const Divider: NextPage = () => {
  return (
    <div className="my-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className=" px-2 text-gray-500">
            <p></p>
          </span>
        </div>
      </div>
    </div>
  );
};
