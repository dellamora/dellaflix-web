/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    mode: "jit",
    purge:[
      "./src/pages/**/*.tsx",
      "./src/common/**/*.tsx",
      "./src/modules/**/*.tsx",
    ],
    content: [
      "./src/pages/**/*.tsx",
      "./src/common/**/*.tsx",
      "./src/modules/**/*.tsx",
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}
