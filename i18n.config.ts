//------i18n configuration --- from nuxtjs/i18n docs
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'it',
    messages: {
      it: {
        welcome: 'Benvenuti',
        artworks: 'Opere',
        books: 'Volumi',
        bio: 'Bio',
        contacts: 'Contatti',
        Photo: 'Foto',
        Video: 'Video',
        Other: 'Altro',
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
        
        photographer:'Fotografa',
        designanddev:'Design e sviluppo',
      },
      en: {
        welcome: 'Welcome',
        artworks: 'Artworks',
        books: 'Books',
        bio: 'Bio',
        contacts: 'Contacts',
        Photo: 'Photo',
        Video: 'Video',
        Other: 'Other',
        images: 'Images',
        texts: 'Texts',
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
        
        designanddev:'Design and development',
        photographer:'Photographer',
      }
    }
  }))
  