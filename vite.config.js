import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./server/components/"),
    },
  },
  build: {
    sourcemap: true, // Disable sourcemaps for simplicity.
    // minify: "terser", // Minify the output.
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "./server/components/index.ts"),
      name: "MyComponents",
      formats: ["es"],
      fileName: "components.min",
    },
    emptyOutDir: false,
    rollupOptions: {
      output: {
        dir: path.resolve(__dirname, "./server/public/"),
      },
    },
  },
});
