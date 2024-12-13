// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap'},
      ],
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/mdc',
    'nuxt-anchorscroll',
    '@nuxt/image'
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
    //strategy: 'prefix', // set routing strategy to have a prefix for both language
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
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  image: {
    provider: 'ipx',
  }

})