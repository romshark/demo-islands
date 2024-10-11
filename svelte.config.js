import { sveltePreprocess } from "svelte-preprocess";
import autoprefixer from "autoprefixer";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  compilerOptions: {
    customElement: true,
  },
  preprocess: sveltePreprocess({
    sourceMap: true,
    preprocess: sveltePreprocess({
      sourceMap: true,
      preprocess: {
        plugins: [autoprefixer()],
      },
    }),
    postcss: {
      plugins: [autoprefixer()],
    },
  }),
};
