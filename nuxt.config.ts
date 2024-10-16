// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/mdc'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  content: {
    // Options
  },

  //------i18n configuration --- from nuxtjs/i18n docs
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['it', 'en' ], // used in URL path prefix
    defaultLocale: 'it', // default locale of your project for Nuxt pages and routings
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: '~/config/tailwind.js',
    exposeConfig: true,
    config: {},
    viewer: true,
  },

  colorMode: {
    preference: 'light'
  }

})