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

const myCategory = ['Photo', 'Other'];

</script>





<template>
    
    
    <!--ARTWORK Heading section + navigation buttons-->
    <div class="h-32 md:h-24"></div> <!--style="border:solid red" -->
    
    <div class="sticky top-12 md:top-24 bg-BRG-white  h-12 flex flex-row gap-4 items-center md:justify-end"> <!--style="border:solid" -->
        <div class="h-4 brg-txt-button brg-cta">{{ $t('photos') }}</div>
        <div class="h-4 brg-txt-button brg-cta">{{ $t('videos') }}</div>
        <div class="h-4 brg-txt-button brg-cta">{{ $t('other') }}</div>
    </div>
    

    <!--ARTWORK List-->
    <div v-for="artwork of artworks" :key="artwork.slug" class="mb-8">

        
        <div v-if=myCategory.includes(artwork.category)>
            
            <NuxtLink :to="localePath(String(artwork._path))">
                <div  class=" flex-col justify-start items-start inline-flex" >
    
                    <div class="self-stretch brg-txt-body">
                        <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}—{{ artwork.endyear }} </p>
                        <p v-else>{{ artwork.beginyear }}</p>
                    </div>

                    <div class="self-stretch brg-txt-heading">
                        <h1>{{ artwork.title }}</h1>
                        <h1>{{ artwork.subtitle }}</h1>
                    </div>
                    <!--
                        <p style="color:brown">{{ artwork.category }}</p>
                    -->

                </div>
            </NuxtLink>
            
        </div>
        
        <div v-else>

            <div  class=" flex-col justify-start items-start inline-flex opacity-20" >
    
                <div class="self-stretch brg-txt-body">
                    <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}—{{ artwork.endyear }} </p>
                    <p v-else>{{ artwork.beginyear }}</p>
                </div>
                
                <div class="self-stretch brg-txt-heading">
                    <h1>{{ artwork.title }}</h1>
                    <h1>{{ artwork.subtitle }}</h1>
                </div>
                
                <!--
                    <div>
                        <p style="color:brown">{{ artwork.category }}</p>
                        <MDC :value="artwork.bodytext" />
                    </div>
                -->
            </div>

        </div>

    </div>
    
    
    <!--scroll test-->
    <div class="w-full h-svh"></div>


</template>
