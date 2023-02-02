/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", fontFamily.sans],
        eb: ["var(--font-eb-garamond)", fontFamily.sans],
        robo: ["var(--font-roboto-mono)", fontFamily.sans],
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
