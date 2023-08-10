import { svelte } from "@sveltejs/vite-plugin-svelte";
import laravel from "laravel-vite-plugin";
import path from "path";
import sveltePreprocess from "svelte-preprocess";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true,
    }),
    svelte({
      preprocess: sveltePreprocess({
        typescript: true,
      }),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "resources/src"),
    },
  },
});
