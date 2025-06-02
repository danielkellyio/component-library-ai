import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { HstNuxt } from "@histoire/plugin-nuxt";

export default defineConfig({
  setupFile: "./histoire.setup.ts",
  plugins: [HstVue(), HstNuxt()],
  vite: {
    resolve: {
      alias: {
        "@tanstack/vue-virtual/dist/esm":
          "@tanstack/vue-virtual/dist/esm/index.js",
        "@tanstack/virtual-core/dist/esm":
          "@tanstack/virtual-core/dist/esm/index.js",
      },
      dedupe: ["@tanstack/vue-virtual", "@tanstack/virtual-core"],
    },
    optimizeDeps: {
      include: ["@tanstack/vue-virtual", "@tanstack/virtual-core"],
    },
    ssr: {
      noExternal: ["@tanstack/vue-virtual", "@tanstack/virtual-core"],
    },
  },
});
