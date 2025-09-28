const colors = require("./src/components/ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        primary: ["primary"],
        primaryItalic: ["primaryItalic"],
        medium: ["medium"],
        extraBold: ["extraBold"],
        Bold: ["Bold"],
        extraBoldItalic: ["extraBoldItalic"],
      },
      colors,
    },
  },
  plugins: [],
};
