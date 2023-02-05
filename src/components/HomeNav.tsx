import Link from "next/link";

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
const tabs = [
  { name: "on The Lower East Side", href: "/les", current: true },
  { name: "in Soho and Noho", href: "/soho-noho", current: false },
  { name: "in Nolita, Chinatown, and Little Italy", href: "#", current: false },
  { name: "Newsletter", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const HomeNav = () => {
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
    </div>
  );
};
