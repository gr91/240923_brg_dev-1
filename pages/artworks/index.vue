<script setup lang="ts">


//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

//produce content path and dynamic key based on locale
const contentPath = `/artworks/${locale.value}`;
const myKey = `HelloArtworks-${locale.value}`;

//execute content query
const { data: artworks } = await useAsyncData(myKey, () => {
    return queryContent(contentPath)
    .sort({beginyear: 1, endyear: 1})
    .find()
});    

const myCategory = ['Photo', 'Other'];




</script>





<template>
    <!----Variable test print----
    <p>----------------------------------------</p>
    <p>VARIABLES PRINT TEST</p>
    <p><strong>locale: </strong>{{ locale }}</p>
    <p><strong>contentPath: </strong>{{ contentPath }}</p>
    <p><strong>myKey: </strong>{{ myKey }}</p>
    <p>----------------------------------------</p>
    -->
    
    
    <!--ARTWORK Heading section + navigation buttons-->
    <div style="border:solid red" class="h-32 md:h-24"></div>
    
    <div style="border:solid" class="sticky top-12 md:top-24 h-12 px-4 bg-BRG-white flex flex-row gap-4 items-center md:justify-end ">
        <button class="h-4 brg-txt-button brg-cta">{{ $t('photos') }}</button>
        <button class="h-4 brg-txt-button brg-cta">{{ $t('videos') }}</button>
        <button class="h-4 brg-txt-button brg-cta">{{ $t('other') }}</button>
    </div>
    
    
    
    
    <!--ARTWORK List-->
    <div v-for="artwork of artworks" :key="artwork.slug" class="my-4 px-4">

        
        <div v-if=myCategory.includes(artwork.category)>
            
            <!--Edit artwork._path to remove locale marker from content path-->
            <NuxtLink :to="localePath(`/artworks${artwork._path?.substring(12)}`)" >
                <div  class=" flex-col justify-start items-start inline-flex" >
    
                    <div class="self-stretch brg-txt-body">
                        <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}—{{ artwork.endyear }} </p>
                        <p v-else>{{ artwork.beginyear }}</p>
                    </div>

                    <div class="self-stretch brg-txt-heading">
                        <h1>{{ artwork.title }}</h1>
                        <h1>{{ artwork.subtitle }}</h1>
                    </div>
                    <p style="color:brown">{{ artwork.category }}</p>
                    <p>{{ `/artworks${artwork._path?.substring(12)}` }}</p>
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
                
                <p style="color:brown">{{ artwork.category }}</p>
                <!--
                    <div>
                        <MDC :value="artwork.bodytext" />
                    </div>
                -->
            </div>

        </div>

    </div>
    
    
    <!--scroll test-->
    <div class="w-full h-svh"></div>


</template>
