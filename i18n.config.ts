//------i18n configuration --- from nuxtjs/i18n docs
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'it',
    messages: {
      it: {
        welcome: 'Benvenuti',
        artworks: 'Opere',
        books: 'Libri',
        bio: 'Bio',
        contacts: 'Contatti'
      },
      en: {
        welcome: 'Welcome',
        artworks: 'Artworks',
        books: 'Books',
        bio: 'Bio',
        contacts: 'Contacts'
      }
    }
  }))
  