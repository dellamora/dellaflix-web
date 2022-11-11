/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.tsx",
    "./src/common/**/*.tsx",
    "./src/modules/**/*.tsx",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primaryLight: "#f1ab7539",
      primary: "#FDC892",
    },

    fontFamily: {
      Frank: ["Frank Ruhl Libre", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
   
  },
  fill: ["responsive", "hover", "focus"],
  plugins: [],
};
