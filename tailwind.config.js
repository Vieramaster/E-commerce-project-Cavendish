/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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

    },
  },
  plugins: [],
};
