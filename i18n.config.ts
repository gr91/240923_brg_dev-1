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
        contacts: 'Contatti',
        photos: 'Foto',
        videos: 'Video',
        other: 'Altro',
        images: 'Immagini',
        texts: 'Testi',
      },
      en: {
        welcome: 'Welcome',
        artworks: 'Artworks',
        books: 'Books',
        bio: 'Bio',
        contacts: 'Contacts',
        photos: 'Photos',
        videos: 'Videos',
        other: 'Other',
        images: 'Images',
        texts: 'Text',

      }
    }
  }))
  