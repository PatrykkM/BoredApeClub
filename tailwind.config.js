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
        "8.5xl": ["6rem", { lineHeight: "1" }],
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
      },
      height: {
        88: "22rem",
        92: "23rem",
        68: "17rem",
        66: "16.5rem",
        100: "25rem",
      },
      width: {
        17: "4.50rem",
      },
      borderColor: {
        "Lighter-Grey": "#29282D",
      },
    },
  },
  plugins: [],
};
