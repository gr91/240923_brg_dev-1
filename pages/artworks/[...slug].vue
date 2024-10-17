<script setup>

//------------i18n configuration (from nuxtjs/i18n docs)------------

//const localePath = useLocalePath()
//const { locale, setLocale } = useI18n()

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
            <div style="border:solid grey" class="h-30 md:h-28 flex-col justify-start items-start inline-flex" > <!--style="border:solid green"-->
                <div class="self-stretch brg-body-text">
                    <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}—{{ artwork.endyear }} </p>
                    <p v-else>{{ artwork.beginyear }}</p>
                </div>
                <div class="self-stretch brg-heading-text">
                    <h1 style="font-size: 24px; line-height: 130%;">{{ artwork.title }}</h1>
                    <h1 style="font-size: 24px; line-height: 130%;">{{ artwork.subtitle }}</h1>
                </div>
            </div> 
            
            <!--ARTWORKA Navigation-->
            <div style="border:solid grey" class="h-12 flex flex-row gap-4 items-center md:justify-end"> <!--style="border: solid greenyellow"-->
                <div style="border-bottom: solid;" class="h-5 brg-body-text">{{ $t('images') }}</div>
                <div style="border-bottom: solid;" class="h-5 brg-body-text">{{ $t('texts') }}</div>
            </div>
            
        </div>
        
        
        <!--CAROUSEL-->
        <UCarousel
        v-slot="{ item, index }"
        :items="items"
        :ui="{ item: 'w-full' }"
        
        style="border:solid aqua 2px"
        class="w-full h-full min-h-0 flex"
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
                <div style="border:solid green 2px" class="flex-none w-fit">
                    <p> {{ item.caption }} </p>
                </div>

            </div>
        
        </UCarousel>

    
    </div>



    <!--SCROLL section-->
    <div class="w-full mt-4 h-80" style="border:solid red">
        <MDC :value="artwork.bodytext"/>
    </div>



</template>
