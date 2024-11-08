<script setup lang="ts">


//add Netlify Identity Widget 
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

//produce content path and dynamic key based on locale
const contentPath = `/artworks/${locale.value}`;

//execute content query
const { data: artworks } = await useAsyncData('helloHome', () => {
  return queryContent(contentPath)
  .sort({beginyear: 1})
  .find()
});

//Find thr artwork to use for the homepage, based on its slug
const homeArtwork = artworks.value?.find(artwork => artwork._path === `/artworks/${locale.value}/2024-11-08-il-corpo-dell'identita`);

//create and populate and array with images'URLs and caption from 'homeArtwork' object
const imageItems = homeArtwork?.images.map((image: { image: string; caption: string; }) => ({
    image: image.image,   // The image URL from the markdown file
    caption: image.caption // The caption from the markdown file
    }));

//add carousel autoplay configuration
const carouselRef = ref();

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return
        
        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }
        carouselRef.value.next()
    }, 6000)
});

</script>



<template >
  
  
  
  
  <!--FIT TO SCREEN section-->
  <div class="w-full h-dvh mx-auto flex flex-col pt-12 md:pt-24 ">
    
    
    
    
    <!--CAROUSEL-->
    <UCarousel
    v-slot="{ item, index }"
    :items="imageItems"
    :ui="{ item: 'w-full px-4 md:px-0 py-16'}"
    ref="carouselRef"
    class="h-full md:px-4 flex scroll-mt-48 "
    >
    
    <div class="h-full m-auto flex flex-col justify-start items-start ">
      
      <!--CAROUSEL Images-->
      <div class="w-fit h-full min-h-0 max-h-full flex"> 
        <img :src="item.image" :alt="item.caption"
        draggable="false"
        style="
                    max-width: 100%;
                    max-height: 100%;
                    display: block;"
                    class="max-w-full object-contain"
                    >
                  </div>
                  
                  <!--CAROUSEL Caption-->
                  <div class="w-fit brg-txt-caption"> 
                    <p> {{ item.caption }} </p>
                  </div>
                  
                </div>
                
              </UCarousel>
              
              
            </div>
            
            
            
            
            <!--
              <div class="mt-40">
                <p>----------------</p>
                <br>
                <br>
                <p>{{ artworks }}</p>
                <p>----------------</p>
                <br><br><br>
                <p><strong>artworks items</strong></p>
                <div v-for="item of artworks">
                  <p>{{ item }}</p><br>
                </div>
                <p>----------------</p>
                <p><strong>homeArtwork</strong>: {{ homeArtwork }}</p>
                <br><br><br>
                <p>----------------</p>
                <p>{{ homeArtwork?.images }}</p>
              </div>
            -->




</template>
