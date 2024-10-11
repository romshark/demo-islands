import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  content: [
    "./server/**/*.templ", // Include any .templ files
  ],
  plugins: [tailwindcss, autoprefixer],
};
