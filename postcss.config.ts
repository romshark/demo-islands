module.exports = {
  content: [
    "./server/**/*.templ", // Include any .templ files
  ],
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
