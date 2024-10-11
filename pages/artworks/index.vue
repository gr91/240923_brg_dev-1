<script setup lang="ts">
//const route = useRoute()
const { data: artworks } = await useAsyncData('hello', () => {
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


    <!--Empty section alligned to AppHeader-->
    <div class="fixed w-full max-w-7xl mx-auto pr-8"> <!--style="border:solid, blue"-->
    </div>   
        
    <!--ARTWORK Heading section + navigation buttons-->
    <div style="border:solid" class="fixed w-full max-w-7xl h-24 mx-auto mt-14 mb:mt-24 pr-8 flex justify-stard md:justify-end">  <!--style="border:solid"-->
        <div style="border:solid" class="flex flex-row gap-4 pt-1  "> <!--style="border: solid greenyellow"-->
            <div class="self-stretch brg-body-text">Photos</div>
            <div class="self-stretch brg-body-text">Videos</div>
            <div class="self-stretch brg-body-text">Other</div>
        </div>
    </div>
        

    <!--Empty section alligned to AppHeader / fixed height-->
    <div class="w-full h-48 md:h-24 flex-none "></div> <!--style="border:solid, blue"-->
    
    <div v-for="artwork of artworks" :key="artwork.slug" class="mb-4">
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
