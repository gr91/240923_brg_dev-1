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


//Artworks filter variables
const photoIsActive = ref (true);
const videoIsActive = ref (true);
const otherIsActive = ref (true);




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
    <div class="h-32 md:h-24"></div> <!--style="border:solid red" -->
    
    <div class="sticky top-12 md:top-24 h-12 z-40 px-4 bg-BRG-white md:bg-opacity-0 flex flex-row gap-4 items-center md:justify-end "> <!--style="border:solid" -->
        <!--Photo buttons-->
        <button v-if="photoIsActive==true"
            @click="photoIsActive=false"
            class="h-4 brg-txt-button brg-cta"
            >{{ $t('photos') }}</button>
        <button v-else
            @click="photoIsActive=true"
            class="h-4 brg-txt-button brg-cta opacity-30"
        >{{ $t('photos') }}</button>

        <!--Video buttons-->
        <button v-if="videoIsActive==true"
            @click="videoIsActive=false"
            class="h-4 brg-txt-button brg-cta"
            >{{ $t('video') }}</button>
        <button v-else
            @click="videoIsActive=true"
            class="h-4 brg-txt-button brg-cta opacity-30"
        >{{ $t('video') }}</button>

        <!--Other buttons-->
        <button v-if="otherIsActive==true"
            @click="otherIsActive=false"
            class="h-4 brg-txt-button brg-cta"
            >{{ $t('other') }}</button>
        <button v-else
            @click="otherIsActive=true"
            class="h-4 brg-txt-button brg-cta opacity-30"
        >{{ $t('other') }}</button>

    </div>
    
    
    
    <!--ARTWORK List-->
    <div v-for="artwork of artworks" :key="artwork.slug" class="my-6 px-4">


        <!--Build photo artworks-->
        <div v-if="artwork.category == String('Photo')">
            
            <!--Check if photo artworks are selected-->
            <div v-if="photoIsActive == true">
                <!--Edit artwork._path to remove locale marker from content path-->
                <NuxtLink :to="localePath(`/artworks${artwork._path?.substring(12)}`)">
                    <div  class=" flex-col justify-start items-start inline-flex" >
                        <div class="self-stretch brg-txt-body">
                            <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                            <p v-else>{{ artwork.beginyear }}</p>
                        </div>
                        <div class="self-stretch brg-txt-heading">
                            <h1>{{ artwork.title }}</h1>
                            <h1>{{ artwork.subtitle }}</h1>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            
            <div v-else>
                <div  class=" flex-col justify-start items-start inline-flex opacity-20" >
                    <div class="self-stretch brg-txt-body">
                        <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                        <p v-else>{{ artwork.beginyear }}</p>
                    </div>
                    <div class="self-stretch brg-txt-heading">
                        <h1>{{ artwork.title }}</h1>
                        <h1>{{ artwork.subtitle }}</h1>
                    </div>
                </div>
            </div>
            
        </div>
        
        
        
        <!--Build video artworks-->
        <div v-if="artwork.category == String('Video')">
            
            <!--Check if video artworks are selected-->
            <div v-if="videoIsActive == true">
                <!--Edit artwork._path to remove locale marker from content path-->
                <NuxtLink :to="localePath(`/artworks${artwork._path?.substring(12)}`)" >
                    <div  class=" flex-col justify-start items-start inline-flex" >
                        <div class="self-stretch brg-txt-body">
                            <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                            <p v-else>{{ artwork.beginyear }}</p>
                        </div>
                        <div class="self-stretch brg-txt-heading">
                            <h1>{{ artwork.title }}</h1>
                            <h1>{{ artwork.subtitle }}</h1>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            
            <div v-else>
                <div  class=" flex-col justify-start items-start inline-flex opacity-20" >
                    <div class="self-stretch brg-txt-body">
                        <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                        <p v-else>{{ artwork.beginyear }}</p>
                    </div>
                    <div class="self-stretch brg-txt-heading">
                        <h1>{{ artwork.title }}</h1>
                        <h1>{{ artwork.subtitle }}</h1>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        <!--Build other artworks-->
        <div v-if="artwork.category == String('Other')">
            
            <!--Check if other artworks are selected-->
            <div v-if="otherIsActive == true">
                <!--Edit artwork._path to remove locale marker from content path-->
                <NuxtLink :to="localePath(`/artworks${artwork._path?.substring(12)}`)" >
                    <div  class=" flex-col justify-start items-start inline-flex" >
                        <div class="self-stretch brg-txt-body">
                            <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                            <p v-else>{{ artwork.beginyear }}</p>
                        </div>
                        <div class="self-stretch brg-txt-heading">
                            <h1>{{ artwork.title }}</h1>
                            <h1>{{ artwork.subtitle }}</h1>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            
            <div v-else>
                <div  class=" flex-col justify-start items-start inline-flex opacity-20" >
                    <div class="self-stretch brg-txt-body">
                        <p v-if="artwork.beginyear != artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                        <p v-else>{{ artwork.beginyear }}</p>
                    </div>
                    <div class="self-stretch brg-txt-heading">
                        <h1>{{ artwork.title }}</h1>
                        <h1>{{ artwork.subtitle }}</h1>
                    </div>
                </div>
            </div>
        </div>
        
            
    </div>
        
    
    <!--scroll test-->
    <div class="w-full h-svh"></div>


</template>
