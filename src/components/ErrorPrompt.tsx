/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { MdReportGmailerrorred } from "react-icons/md";

export const ErrorPrompt = () => {
  return (
    <div className="rounded-md bg-yellow-100 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <MdReportGmailerrorred
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Invalid username or password.
          </h3>
        </div>
      </div>
    </div>
  );
};
