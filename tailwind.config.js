/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custombrown: "#5B4646",
        customblack: "#303030",
        customred:"#d20000",
        customyellow:"#e2bc56"
      },
    },
  },
  plugins: [],
}
