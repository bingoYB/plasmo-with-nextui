/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react")

module.exports = {
  content: [
    "./src/**/*.{tsx,html}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  // prefix: "plasmo-",
  plugins: [nextui()]
}
// tailwind.config.js

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // ...
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [nextui()]
// }
