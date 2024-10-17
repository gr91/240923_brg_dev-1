<script setup lang="ts">


//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()

const route = useRoute()      
const actualPath = route.path.replace(/\/$/, '');

//edit path to include en/it folder 
const myPath = "/artworks" + actualPath.replace("/artworks", "");

//produce a unique key for useAsyncData composable
const myKey = myPath.replace('/artworks/', 'Helloartworks-');

//const route = useRoute()
const { data: artworks } = await useAsyncData(myKey, () => {
  return queryContent(myPath)
  .sort({beginyear: 1, endyear: 1})
  .find()
});


</script>





<template>
    
    
    <!--ARTWORK Heading section + navigation buttons-->
    <div style="border:solid red" class="h-32 md:h-24"></div>
    
    <div style="border:solid" class="sticky top-12 md:top-24 bg-BRG-white  h-12 flex flex-row gap-4 items-center md:justify-end">
        <div style="border-bottom: solid;" class="h-5 brg-body-text">{{ $t('photos') }}</div>
        <div style="border-bottom: solid;" class="h-5 brg-body-text">{{ $t('videos') }}</div>
        <div style="border-bottom: solid;" class="h-5 brg-body-text">{{ $t('other') }}</div>
    </div>
    

    <!--ARTWORK List-->
    <div v-for="artwork of artworks" :key="artwork.slug" class="my-4">
        <NuxtLink :to="localePath(String(artwork._path))">
            <div  class=" flex-col justify-start items-start inline-flex" >
                <div class="self-stretch brg-body-text">
                    <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}—{{ artwork.endyear }} </p>
                    <p v-else>{{ artwork.beginyear }}</p>
                </div>
                <div class="self-stretch brg-heading-text">
                    <h1 style="font-size: 24px; line-height: 130%;">{{ artwork.title }}</h1>
                    <h1 style="font-size: 24px; line-height: 130%;">{{ artwork.subtitle }}</h1>
                </div>
                <!--content language update test-->
                <div>
                    <MDC :value="artwork.bodytext" />
                </div>
            </div>
        </NuxtLink>
    </div>
    
    
    <!--scroll test-->
    <div class="w-full h-svh"></div>


</template>
