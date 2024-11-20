import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./server/**/*.{html,js,ts,templ}"],
  darkMode: ["class"],
  safelist: ["dark"],
  theme: {
    extend: {
      colors: {
        popupbg: {
          DEFAULT: "var(--sl-color-neutral-50)",
          dark: "var(--sl-color-neutral-100)",
        },
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};

export default config;
