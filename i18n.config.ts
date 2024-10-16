//------i18n configuration --- from nuxtjs/i18n docs
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'it',
    messages: {
      it: {
        welcome: 'Benvenuti',
      },
      en: {
        welcome: 'Welcome',
      }
    }
  }))
  