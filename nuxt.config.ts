import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "reka-ui/nuxt",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  content: {
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          theme: "github-dark",
        },
      },
    },
  },
});
