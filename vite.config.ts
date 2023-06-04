import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

/** @type {import('vite').UserConfig} */
const config = defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    }
  },
});

export default config;
