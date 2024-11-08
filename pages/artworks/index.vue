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
    .sort({beginyear: 1})
    .find()
});    


//Artworks filter variables
const photoIsActive = ref (true);
const videoIsActive = ref (true);
const otherIsActive = ref (true);


//---------------------
type filterItem = {
    category: string;
    isActive: boolean;
};

const filter = ref([
    {'category': 'Photo', 'isActive': true},
    {'category': 'Video', 'isActive': true},
    {'category': 'Other', 'isActive': true},
]);

const activeCounter = ref({value: 3 });

function updateFilter (
    thisItem: number,
    filter: filterItem[],
    activeCounter: {value: number}) {
        if (activeCounter.value == 3) {
            filter.forEach(element => {
                element.isActive = false;
            });
            filter[thisItem].isActive = true;
            activeCounter.value = 1;
        }
        else if (activeCounter.value < 3 && activeCounter.value > 1) {
            if (filter[thisItem].isActive == true) {
                filter[thisItem].isActive = false;
                activeCounter.value = activeCounter.value -1;
            }
            else {
                filter[thisItem].isActive = true;
                activeCounter.value = activeCounter.value +1;
            }
        }
        else if (activeCounter.value == 1) {
            if (filter[thisItem].isActive == true) {
                filter.forEach(element => {
                element.isActive = true;
                });
                activeCounter.value = 3;   
            }
            else {
                filter[thisItem].isActive = true;
                activeCounter.value = activeCounter.value +1;
            }
        }        
};

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
    
    <div class="sticky top-12 md:top-24 h-12 z-40 px-4 bg-BRG-white md:bg-opacity-0 flex flex-row gap-4 items-center md:items-start md:pt-1 md:justify-end">
        
        <div v-for="(item, index) in filter" :key="index">
    
            <!--IF the category is active or not-->
            <button v-if="item.isActive == true"
                class="flex h-4 brg-txt-button brg-cta"
                @click="updateFilter(index, filter, activeCounter)"
            >
                {{ $t(item.category) }}
            </button>
    
            <!--IF the category is NOT active or not-->
            <button v-else
                class="flex h-4 brg-txt-button brg-cta opacity-30"
                @click="updateFilter(index, filter, activeCounter)"
            >
                {{ $t(item.category) }}
            </button>
    
        </div>

    </div>

    

    
    <!--ARTWORK List-->
    <div v-for="artwork of artworks" :key="artwork.slug" class="my-6 px-4">


        <!--Build photo artworks-->
        <div v-if="artwork.category == String('Photo')">
            
            <!--Check if photo artworks are selected-->
            <div v-if="filter[0].isActive == true">
                <!--Edit artwork._path to remove locale marker from content path-->
                <NuxtLink :to="localePath(`/artworks${artwork._path?.substring(12)}`)">
                    <div  class=" flex-col justify-start items-start inline-flex" >

                        <div class="self-stretch brg-txt-body">
                            <div v-if="artwork.inprogress == true">
                                <p>{{ artwork.beginyear }} – In progress</p>
                            </div>
                            <div v-else>
                                <p v-if="artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                                <p v-else>{{ artwork.beginyear }}</p>
                            </div>
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
                        <div v-if="artwork.inprogress == true">
                            <p>{{ artwork.beginyear }} – In progress</p>
                        </div>
                        <div v-else>
                            <p v-if="artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                            <p v-else>{{ artwork.beginyear }}</p>
                        </div>
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
            <div v-if="filter[1].isActive == true">
                <!--Edit artwork._path to remove locale marker from content path-->
                <NuxtLink :to="localePath(`/artworks${artwork._path?.substring(12)}`)" >
                    <div  class=" flex-col justify-start items-start inline-flex" >
                        <div class="self-stretch brg-txt-body">
                            <div v-if="artwork.inprogress == true">
                                <p>{{ artwork.beginyear }} – In progress</p>
                            </div>
                            <div v-else>
                                <p v-if="artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                                <p v-else>{{ artwork.beginyear }}</p>
                            </div>
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
                        <div v-if="artwork.inprogress == true">
                            <p>{{ artwork.beginyear }} – In progress</p>
                        </div>
                        <div v-else>
                            <p v-if="artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                            <p v-else>{{ artwork.beginyear }}</p>
                        </div>
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
            <div v-if="filter[2].isActive == true">
                <!--Edit artwork._path to remove locale marker from content path-->
                <NuxtLink :to="localePath(`/artworks${artwork._path?.substring(12)}`)" >
                    <div  class=" flex-col justify-start items-start inline-flex" >
                        <div class="self-stretch brg-txt-body">
                            <div v-if="artwork.inprogress == true">
                                <p>{{ artwork.beginyear }} – In progress</p>
                            </div>
                            <div v-else>
                                <p v-if="artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                                <p v-else>{{ artwork.beginyear }}</p>
                            </div>
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
                        <div v-if="artwork.inprogress == true">
                            <p>{{ artwork.beginyear }} – In progress</p>
                        </div>
                        <div v-else>
                            <p v-if="artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                            <p v-else>{{ artwork.beginyear }}</p>
                        </div>
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
