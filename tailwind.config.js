/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        esmerald: "#3b5e48",
        darkEsmerald: "#2c4937",
        white: "#fff",
        yellow: "#fede67",
        lightCarbon:"#404040",
        carbon: "#191919",
        lightGrey: "#ececec",
        customGrey: "#c5c2c9",
        darkGrey:"#a09ea2",
        lightEsmerald: "#73957e",

      },
      fontFamily: {
        Noto: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
