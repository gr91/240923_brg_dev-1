<script setup >

//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

const route = useRoute()      
const actualPath = route.path.replace(/\/$/, '');



//edit actualPath to remove locale prefix and incldue locale sub folder in content path
const marker = '/artworks/';
const index = actualPath.indexOf(marker);
const cleanedPath = index !== -1 ? actualPath.substring(index + marker.length) : actualPath;
const thisArtworkPath = `/artworks/${locale.value}/${cleanedPath}`;

//produce a unique key for useAsyncData that includes locale
const myKey = `${locale.value}-${cleanedPath}`;



//query data via useAsyncData composable
const { data: artwork } = await useAsyncData(myKey, () =>
    queryContent(thisArtworkPath).findOne()
);

//create and populate and array with images'URLs and caption for 'artwork' array
const items = artwork.value.images.map(image => ({
  image: image.image,   // The image URL from the markdown file
  caption: image.caption // The caption from the markdown file
}));



// set scrollTo function to ensure scroll to section not affect browser history
const scrollTo = (hash) => {
  const element = document.querySelector(hash)
  if (element) {

    // Perform the smooth scroll
    element.scrollIntoView({ behavior: 'smooth' });

    // After scrolling, replace the state again to maintain the current URL
    setTimeout(() => {
      history.replaceState(null, null, hash);
    }, 500);  // Add a slight delay to let the scroll complete smoothly
  }
}

</script>



<template>

    













    <!--
    <div style="border:solid red" class="h-32 md:h-24"></div>
    <p>----------------------------------------</p>
    <p><strong>route: </strong>{{ route }}</p><br>
    <p><strong>actualPath: </strong>{{ actualPath }}</p><br>
    
    <br>
    <br>
    <br>
    <p><strong>cleanedPath: </strong>{{ cleanedPath }}</p><br>
    <p><strong>thisArtworkPath: </strong>{{ thisArtworkPath }}</p><br>
    <p><strong>myKey: </strong>{{ myKey }}</p><br>
    <br>
    <br>
    <br>
    <p>{{ artwork }}</p><br>
    <p>{{ artwork.title }}</p><br>
    <p>{{ artwork.beginyear }}</p><br>
    <p>{{ items }}</p><br>
    <MDC :value="artwork.bodytext"/>
    -->

</template>
