import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default {
  content: [
    "./server/**/*.templ", // Include any .templ files
  ],
  plugins: [
    tailwindcss,
    autoprefixer,
    cssnano({
      preset: "default",
    }),
  ],
};
