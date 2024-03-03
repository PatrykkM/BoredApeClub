/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "410px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        kanit: ["Kanit"],
      },
      maxWidth: {
        76: "19.75rem",
        108: "27rem",
      },
      fontSize: {
        "9.5xl": ["8.25rem", { lineHeight: "1" }],
      },
      backgroundColor: {
        "main-background": "#111112",
        "Img-background": "#1C1C1E",
        "Light-Green": "#8FFF6A",
        "Light-Grey": "#1B191C",
        "Lighter-Grey": "#252527",
        "Darker-White": "#EEEEEE",
      },
      colors: {
        "uninportant-text": "#888888",
        "Light-Green": "#8FFF6A",
        "Custom-Grey": "#1C1C1E",
        "Darker-White": "#EEEEEE",
        "Arrow-Dark-White": "#BFBFBF",
      },
      height: {
        88: "22rem",
        92: "23rem",
        68: "17rem",
        66: "16.5rem",
        100: "25rem",
        "6/10": "60%",
      },
      width: {
        17: "4.50rem",
      },
      borderColor: {
        "Lighter-Grey": "#29282D",
        "Arrow-Dark-White": "#BFBFBF",
      },
    },
  },
  plugins: [],
};
