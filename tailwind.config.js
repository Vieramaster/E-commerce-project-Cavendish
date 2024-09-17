/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        esmerald: "#3b5e48",
        darkEsmerald: "#1c2d23",
        white: "#fff",
        yellow: "#fee161",
        lightCarbon: "#404040",
        carbon: "#191919",
        lightGrey: "#e9e9e9",
        darkGrey: "#c5c2c9",
        customGrey: "#a09ea2",
        lightEsmerald: "#73957e",
      },
      fontFamily: {
        Noto: ["Noto Sans JP", "sans-serif"],
      },
      rotate: {
        customMd: "25deg",
      },
    },
  },
  plugins: [],
};
