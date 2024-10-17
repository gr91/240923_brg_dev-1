<script setup lang="ts">

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

const route = useRoute()      
const actualPath = route.path.replace(/\/$/, '');
//edit path to include en/it folder 
const myPath = "/artworks" + actualPath.replace("/artworks", "");

//pruce a unique key  
const myKey = myPath.replace('/artworks/', 'Helloartworks-');

//const route = useRoute()
const { data: artworks } = await useAsyncData(myKey, () => {
  return queryContent(myPath)
  .sort({year: -1})
  .find()
});


// const switchLocalePath = useSwitchLocalePath()
// const localePath = useLocalePath()



</script>





<template>
    
      <!---- SET NEW PATH FOR DATA QUERY ---->
    <div class="mt-24" style="border:solid">

        <p><strong>actualPath</strong></p>
        <p>{{ actualPath }}</p>
        <br>

        <p><strong>actualPath</strong></p>
        <p>{{ myPath }}</p>
        <br>
        
        <p><strong>actualPath</strong></p>
        <p>{{ myKey }}</p>
        <br>
        
    </div>



    <div v-for="artwork in artworks" :key="artwork.slug" class="w-full my-4" style="border:solid grey">
  
        <div>
            <p>{{ artwork.year }}</p>
            <h3>{{ artwork.title }}</h3>

            <br>
            <div>
            <p>{{ artwork._path }}</p>
            </div>
            
            <br>
            <div>
                <MDC :value="artwork.bodytext" />
            </div>

            <br>
            <NuxtLink :to="localePath(String(artwork._path))"> See the artwork </NuxtLink>
        </div>

    </div>


</template>
