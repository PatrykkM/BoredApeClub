/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit"],
      },
      backgroundColor: {
        "main-background": "#111112",
        "Img-background": "#1C1C1E",
        "Light-Green": "#8FFF6A",
        "Light-Grey": "#1B191C",
        "Lighter-Grey": "#29282D",
      },
      colors: {
        "uninportant-text": "#888888",
        "Light-Green": "#8FFF6A",
        "Custom-Grey": "#1C1C1E",
      },
      height: {
        88: "22rem",
        92: "23rem",
        68: "17rem",
        66: "16.5rem",
        100: "25rem",
      },
      borderColor: {
        "Lighter-Grey": "#29282D",
      },
    },
  },
  plugins: [],
};
