<script setup >


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
const contentPath = `/home/${locale.value}/home-selection`;

//query data via useAsyncData composable
const { data: artwork } = await useAsyncData('helloHome', () =>
    queryContent(contentPath).findOne()
);

//create and populate and array with images'URLs and caption from 'artwork' array
const imageItems = (artwork.value?.images && artwork.value.images.length > 0)
    ? artwork.value.images.map(image => ({
      image: image.image,   // The image URL from the markdown file
      caption: image.caption, // The caption from the markdown file
      artworkPath: `/artworks/${image.relartwork}` // The caption from the markdown file
    }))
: [];



//---------------- CAROUSEL + MODAL SETTING ----------------------

const currentIndex = ref(0);
let interval;

onMounted(() => {
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value +1) % imageItems.length;
    }, 4000);
});

onBeforeUnmount(() => {
  // Clear the interval on component unmount
  clearInterval(interval);
});


//--------------------------------------------------------------


</script>



<template >


  

  <!--FIRST IMAGE-->
  <div
    class="w-full h-dvh mx-auto flex flex-col pt-12 md:pt-24 mb-12 md:mb-24"
    style="border: solid grey;"
    >

    <div class="w-full h-full flex justify-center items-center px-4 pb-4 md:pb-8"
      style="border: solid ;"
      >
                
      <NuxtLink :to="localePath(imageItems[0].artworkPath)"
        class="h-full w-fit flex flex-col justify-center items-start"
        style="border: solid green;"
        >
        
        <!--IMAGE-->
        <div class="w-fit md:h-full min-h-0 max-h-full flex justify-center items-center"
          style="border: solid blue;"
          >
          <img
            :src="imageItems[0].image" :alt="imageItems[0].caption"
            class="max-w-full object-contain"
            style="
              max-width: 100%;
              max-height: 100%;
              display: block;
              border: solid red;"
          >
        </div>
                                
        <!--CAPTION-->
        <div v-show="imageItems[0].caption && imageItems[0].caption != ''"
          class="w-fit brg-txt-caption mt-2"
          > 
          <p> {{ imageItems[0].caption }} </p>
        </div>

      </NuxtLink>

    </div>

  </div>

  <!--FROM-->
  <div v-for="item in imageItems.slice(1)"
    class="w-full h-dvh mx-auto flex flex-col pt-12 md:pt-0 pb-0 md:pb-24"
    style="border: solid grey;"
    >

    <div class="w-full h-full flex justify-center items-center px-4 pb-4 md:pb-8"
      style="border: solid ;"
      >
                
      <NuxtLink :to="localePath(item.artworkPath)"
        class="h-full w-fit flex flex-col justify-start md:justify-center items-start"
        style="border: solid green;"
        >
        
        <!--IMAGE-->
        <div class="w-fit md:h-full min-h-0 max-h-full flex justify-center items-center"
          style="border: solid blue;"
          >
          <img
            :src="item.image" :alt="item.caption"
            class="max-w-full object-contain"
            style="
              max-width: 100%;
              max-height: 100%;
              display: block;
              border: solid red;"
          >
        </div>
                                
        <!--CAPTION-->
        <div v-show="item.caption && item.caption != ''"
          class="w-fit brg-txt-caption mt-2"
          > 
          <p> {{ item.caption }} </p>
        </div>

      </NuxtLink>

    </div>

  </div>


  <p>-------------------------------------------------</p>
  <div
    class="px-4 py-12 flex md:justify-center"
    style="border: solid ;"
    >
    <NuxtLink
      :to="localePath('/artworks')"
      class="brg-txt-button brg-cta md:m-auto"
      style="border: solid;"
      >
      {{ $t('artworks') }}
    </NuxtLink>
  </div>

<!--
  
<div v-for="(item, index) in imageItems">
  <NuxtLink :to="localePath(item.artworkPath)" >
    <img
    :src="item.image"
    class="object-contain max-w-md"
    >
    <p class="brg-txt-caption">{{ item.caption }}</p>
  </NuxtLink>
</div>

-->



<!--
  <div>
    <p>-----------------------------</p>
    <p><strong>artwork</strong> {{ artwork }}</p><br>
    
    <p>-----------------------------</p>
    <p><strong>artwork.title</strong> {{ artwork.title }}</p>
    <p><strong>artwork._path</strong> {{artwork._path }}</p>
    
    <p>-----------------------------</p>
    <div v-for="(item, index) in imageItems">
      <p><strong>Image {{ index }}</strong></p>
      <p>{{ item }}</p>
      <br>
      
      <p>{{ item.artworkPath }}</p>
      <br>
      
      <NuxtLink :to="localePath(item.artworkPath)" class="brg-cta">
        <img
        :src="item.image"
        class="object-contain max-w-md"
        >
        <p class="brg-txt-caption">{{ item.caption }}</p>
      </NuxtLink>
    </div>
  </div>
  
-->




</template>
