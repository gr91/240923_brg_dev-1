<script setup>

//------------i18n configuration (from nuxtjs/i18n docs)------------

//const localePath = useLocalePath()
//const { locale, setLocale } = useI18n()

        //Redefine [...slug] path to match content dir architecture
        //  content                             pages
        //  ---artworks                         ---artworks
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

//produce a unique key for useAsyncData composable
const myKey = actualPath.replace("/artworks/", "").replace("/","-");

//query data via useAsyncData composable
const { data: artwork } = await useAsyncData(myKey, () =>
    queryContent(actualPath).findOne()
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


    <!--ARTWORKS header-->
    <div class="fixed top-12 md:top-24 w-full max-w-7xl pr-8 z-40 bg-BRG-white flex flex-col md:flex-row justify-between"> <!--style="border:solid" -->
        
        <!--ARTWORKS Title-->
        <div class="h-30 md:h-24 flex-col justify-start items-start inline-flex" > <!--style="border:solid green"-->
            <div class="self-stretch brg-txt-body">
                <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}—{{ artwork.endyear }} </p>
                <p v-else>{{ artwork.beginyear }}</p>
            </div>
            <div class="self-stretch brg-txt-heading">
                <h1>{{ artwork.title }}</h1>
                <h1>{{ artwork.subtitle }}</h1>
            </div>
        </div> 
        
        <!--ARTWORKA Navigation-->
        <div class="h-12 flex flex-row gap-4 items-center md:justify-end"> <!--style="border: solid greenyellow"-->
            
            <a href="#anchorimg" @click.prevent="scrollTo('#anchorimg')">
                <div class="h-4 brg-txt-button brg-cta">{{ $t('images') }}</div>
            </a>
            <a href="#anchortxt" @click.prevent="scrollTo('#anchortxt')">
                <div class="h-4 brg-txt-button brg-cta">{{ $t('texts') }}</div>
            </a>

        </div>
        
    </div>
    
    

    <!--FIT TO SCREEN section-->
    <div class="w-full h-dvh mx-auto flex flex-col pb-4 pt-56 md:pt-52" id="anchorimg"> <!--style="border: solid red 4px;" -->
        
        
        <!--CAROUSEL-->
        <!--style="border:solid aqua 2px"-->
        <UCarousel
        v-slot="{ item, index }"
        :items="items"
        :ui="{ item: 'w-full' }"
        
        
        class="w-full h-full min-h-0 flex scroll-mt-48"
        >
        
            <div class="w-full mx-auto flex flex-col " > <!--style="border:solid red" -->  
                
                <!--CAROUSEL Images-->
                <div class="mx-auto min-h-0 flex-1 flex"> <!--style="border:solid green 3px" -->
                    <img :src="item.image" :alt="item.caption" draggable="false"
                    style="
                        max-width: 100%;
                        max-height: 100%;
                        display: block;
                        margin: auto;"
                    >
                </div>
                
                <!--CAROUSEL Caption-->
                <div class="flex-none w-fit brg-txt-caption"> <!--style="border:solid green 2px" -->
                    <p> {{ item.caption }} </p>
                </div>

            </div>
        
        </UCarousel>

    
    </div>



    <!--SCROLL section-->
    <div
        class="w-full md:max-w-xl min-h-dvh pt-4 scroll-mt-36 md:scroll-mt-48 brg-txt-body"
        id="anchortxt"
    >
        <MDC :value="artwork.bodytext"/><br>
    </div>



</template>
