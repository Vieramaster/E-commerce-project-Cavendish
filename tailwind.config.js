/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#f4f4f0",
        yellow: "#fee161",
        lightCarbon: "#404040",
        lightGrey: "#e9e9e9",
        darkGrey: "#c5c2c9",
        lineGrey: "#82827e",
        customGrey: "#a09ea2",
        background: "#f4f4f0",
        inputs: "#ebebe7",
        lightTextColor: " #82827e",
        textColor: "#404040",
        subdued: "#bebeba",
        links: "#5a5a56",
        mainColor: "#414930",
        border: " #d2d2ce",
        hover: "#4a5337",
        white: "#fff",
        shopPayButton:"#592ff4",
        shopPayButtonHover:"#390ced",
        payPalButton:"#ffc439",
        payPalButtonHover:"#f0a825",


      },
      fontFamily: {
        tobias: ["Tobias", "sans-serif"],
        alternative: ["Alternative", "sans-serif"],
      },
    },
  },
  plugins: [],
};
