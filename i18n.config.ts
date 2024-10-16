//------i18n configuration --- from nuxtjs/i18n docs
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome'
      },
      fr: {
        welcome: 'Bienvenue'
      }
    }
  }))
  