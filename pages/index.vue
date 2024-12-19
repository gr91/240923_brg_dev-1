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


  <!--FROM-->
  <div
    class="w-full px-4 pt-32 flex flex-col items-center"
    >

    <div v-for="item in imageItems"
      class="flex flex-col mb-32"
      >
  
      <NuxtLink :to="localePath(item.artworkPath)"
        class="h-full w-fit flex flex-col justify-start md:justify-center items-start"
        >
        
        <!--IMAGE-->
        <div class="w-fit md:h-full min-h-0 max-h-full flex justify-center items-center"
          >
          <img
            :src="item.image" :alt="item.caption"
            class=" sm:max-h-[640px] md:max-h-[560px] xl:max-h-[640px] 2xl:max-h-[740px] object-contain"
            style="display: block;"
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


  <div
    class="w-full h-24  px-4 flex gap-8 justify-center items-start"
    >
    <NuxtLink
      :to="localePath('/artworks')"
      class="brg-txt-button brg-cta "
      >
      {{ $t('allartworks') }}
    </NuxtLink>
    
    <NuxtLink
      :to="localePath('/books')"
      class="brg-txt-button brg-cta "
      >
      {{ $t('allbooks') }}
    </NuxtLink>
  </div>




</template>
