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

</script>



<template>



    <!--FIT TO SCREEN section-->
    <div style="border: solid black;" class="w-full h-dvh mx-auto mb-1 flex flex-col pb-4 pt-12 md:pt-24">
        
        
        <!--ARTWORKS header-->
        <div style="border:solid" class="sticky top-12 md:top-24 z-40 bg-BRG-white flex flex-col md:flex-row justify-between ">
            
            <!--ARTWORKS Title-->
            <div style="border:solid grey" class="h-30 md:h-24 flex-col justify-start items-start inline-flex" > <!--style="border:solid green"-->
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
            <div style="border:solid grey" class="h-12 flex flex-row gap-4 items-center md:justify-end"> <!--style="border: solid greenyellow"-->
                <NuxtLink :to="{hash:'#anchorimg'}">
                    <div class="h-4 brg-txt-button brg-cta">{{ $t('images') }}</div>
                </NuxtLink>
                <NuxtLink :to="{hash:'#anchortxt'}">
                    <div class="h-4 brg-txt-button brg-cta">{{ $t('texts') }}</div>
                </NuxtLink>
            </div>
            
        </div>
        
        
        <!--CAROUSEL-->
        <UCarousel
        v-slot="{ item, index }"
        :items="items"
        :ui="{ item: 'w-full' }"
        
        style="border:solid aqua 2px"
        class="w-full h-full min-h-0 flex scroll-mt-48"
        id="anchorimg"
        >
        
            <div style="border:solid red" class="w-full mx-auto flex flex-col " > <!--min-h-0-->  
                
                <!--CAROUSEL Images-->
                <div style="border:solid green 3px" class="mx-auto min-h-0 flex-1 flex">
                    <img :src="item.image" :alt="item.caption" draggable="false"
                    style="
                        max-width: 100%;
                        max-height: 100%;
                        display: block;
                        margin: auto;"
                    >
                </div>
                
                <!--CAROUSEL Caption-->
                <div style="border:solid green 2px" class="flex-none w-fit brg-txt-caption">
                    <p> {{ item.caption }} </p>
                </div>

            </div>
        
        </UCarousel>

    
    </div>



    <!--SCROLL section-->
    <div
        class="w-full mt-4 min-h-dvh brg-txt-body scroll-mt-48"
        style="border:solid red"
        id="anchortxt"
    >
        <MDC :value="artwork.bodytext"/>
        <p>{{ actualPath }}</p>
    </div>



</template>
