<script setup lang="ts">
//const route = useRoute()
const { data: artworks } = useAsyncData('hello', () => {
  return queryContent('/artworks')
  .sort({beginyear: 1, endyear: 1})
  .find()
})


</script>

<template>
    
    <!--ARTWORK HEADER -->
        
    <!--Container for Header ans AppHeader alignment / fixed positionheight background fill
    <div style="border:solid, blue, 3px; background-color: antiquewhite;" class="fixed z-10 mx-auto w-full max-w-7xl pr-8"> 
    </div>
    -->

 
        
    <!--ARTWORK Heading section + navigation buttons-->
    <div class="h-32 md:h-24"></div>

    <div style="border:solid" class="sticky top-12 md:top-24 bg-BRG-white  h-12 flex flex-row gap-4 items-center md:justify-end"> <!--style="border: solid greenyellow"-->
        <div style="border-bottom: solid;" class="h-5 brg-body-text">Photos</div>
        <div style="border-bottom: solid;" class="h-5 brg-body-text">Videos</div>
        <div style="border-bottom: solid;" class="h-5 brg-body-text">Other</div>
    </div>

        
    <!--Empty section alligned to AppHeader / fixed height-->
    <!--
        <div style="border:solid lightgray" class="w-full h-48 md:h-24 flex-none "></div>
    -->
    
    <div v-for="artwork of artworks" :key="artwork.slug" class="my-4">
        <NuxtLink :to="artwork._path">
            <div  class=" flex-col justify-start items-start inline-flex" > <!--style="border:solid green"-->
                <div class="self-stretch brg-body-text">
                    <p>{{ artwork.beginyear }}—{{ artwork.endyear }}</p>
                </div>
                <div class="self-stretch brg-heading-text">
                    <p style="font-size: 24px;">{{ artwork.title }}</p>
                </div>
            </div>         
        </NuxtLink>
    </div>




    <div class="w-full h-svh"></div>

</template>
