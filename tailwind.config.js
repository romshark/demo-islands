import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./server/**/*.{html,js,ts,templ}"],
  darkMode: ["class"],
  safelist: ["dark"],
  theme: {},
  plugins: [tailwindcss, autoprefixer],
};

export default config;
