/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        esmerald: "#3b5e48",
        semiEsmerald: "#2c4937",
        darkEsmerald: "#1c2d23",
        white: "#fff",
        offWhite: "#f4f4f0",
        yellow: "#fee161",
        lightCarbon: "#404040",
        carbon: "#191919",
        lightGrey: "#e9e9e9",
        darkGrey: "#c5c2c9",
        lineGrey: "#82827e",
        customGrey: "#a09ea2",
        lightEsmerald: "#73957e",

        background: "#f4f4f0",
        contrast: " #ffffff",
        inputs: "#ebebe7",
        lightTextColor: " #82827e",
        textColor: "#404040",
        subdued: "#bebeba",
        links: "#5a5a56",
        mainColor: "#414930",
        border: " #d2d2ce",
        hover:"#4a5337",
      },
      fontFamily: {
        tobias: ["Tobias", "sans-serif"],
        alternative :["Alternative", "sans-serif"]
      },
      rotate: {
        first: "20deg",
        second: "30deg",
      },
    },
  },
  plugins: [],
};
