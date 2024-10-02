// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/ui'],
  content: {
    // Options
  }
})