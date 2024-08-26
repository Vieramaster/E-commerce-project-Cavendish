/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        esmerald: "#3b5e48",
        "dark-esmerald": "#2c4937",
        "white": "#fff",
        "yellow": "#fede67",
        "carbon": "#191919",
        "light-grey": "#ececec",
      },
      fontFamily: {
        Quicksand: ["Quicksand", "cursive"],
      },
    },
  },
  plugins: [],
};
