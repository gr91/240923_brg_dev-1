<script setup>

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

//Redefine [...slug] path to match content dir architecture
//  content                             pages
//  ---artworks                            ---artworks
//  ------it | en                       ------ADD HERE /it | /en TO THE PATH  
//  ------------[slug].md               ---------[...slug].vue
defineI18nRoute({
    paths: {
      it: '/artworks/it/[...slug]',
      en: '/artworks/en/[...slug]'
    }
  })



const route = useRoute()      
//edit actualPath to match the correct content path
const actualPath = route.path.replace(/\/$/, '').substring(3);
//pruce a unique key  
const myKey = actualPath.replace("/artworks/", "").replace("/","-");

const { data: artwork } = await useAsyncData(myKey, () =>
    queryContent(actualPath).findOne()
);

</script>



<!--Nuxt page-->
<template>


    <div class="mt-80">
        <p><strong>Actual Path</strong></p>
        <p>{{ actualPath }}</p>
        
        <br>
        <p><strong>myKey</strong></p>
        <p>{{ myKey }}</p>
        
        <br>
        <p><strong>Artwork</strong></p>
        <p>{{ artwork }}</p>

        <br>
        <p><strong>Artwork title</strong></p>
        <p>{{ artwork.title }}</p>

        <br>
        <p><strong>Artwork begin year</strong></p>
        <p>{{ artwork.beginyear }}</p>

        <br>
        <p><strong>Artwork end year</strong></p>
        <p>{{ artwork.endyear }}</p>

        <br>
        <p><strong>Artwork body text</strong></p>
        <p>{{ artwork.bodytext }}</p>

        <br>
        <p><strong>Artwork duplicate description</strong></p>
        <p>{{ artwork.images }}</p>

    </div>



</template>
