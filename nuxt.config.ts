// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900], // Atur varian sesuai kebutuhan
    },
  },
});
