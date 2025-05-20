export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  build: {
    transpile: ['vuetify'],
  },
  css: ['@/assets/styles/main.scss', 'vuetify/styles'],
  modules: ['@pinia/nuxt'],
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 3000,
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/variables" as *;`,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBaseCocktail: process.env.NUXT_PUBLIC_API_BASE_COCKTAIL,
      apiBaseCocktailVersion: process.env.NUXT_PUBLIC_API_BASE_COCKTAIL_VERSION,
    },
  },
  imports: {
    autoImport: true,
  },
});
