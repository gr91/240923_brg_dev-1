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
        projects: 'Progetti',
        order: 'Ordina',
        unavailable: 'Non disponibile',
        close:'Chiudi',

        biography:'Biografia',
        awards:'Premi',
        publiccollections:'Collezioni pubbliche',
        soloexhibitions:'Mostre personali',
        groupexhibitions:'Mostre collettive',
        pubblications:'Pubblicazioni',
        magazines:'Riviste',
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
        projects: 'Projects',
        order: 'Order',
        unavailable: 'Unavailable',
        close:'Close',
        
        biography:'Biography',
        awards:'Awards',
        publiccollections:'Public collections',
        soloexhibitions:'Solo exhibitions',
        groupexhibitions:'Group exhibitions',
        pubblications:'Pubblications',
        magazines:'Magazines',
      }
    }
  }))
  