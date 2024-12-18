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
      caption: image.caption // The caption from the markdown file
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




  <!--FIT TO SCREEN section-->
  <div class="w-full h-dvh mx-auto flex flex-col pt-12 md:pt-24 ">

        <!-- NEW CAROUSEL -->
    <div class="w-full h-full flex justify-center items-center px-4 pb-4 md:pb-10">
                
      <div class="h-full w-fit flex flex-col justify-start items-start" >
                
        <!--CAROUSEL Images-->
        <button
          @click=""
          class="w-fit h-full min-h-0 max-h-full flex justify-center items-center"
          >
                            
          <img
            :src="imageItems[currentIndex].image" :alt="imageItems[currentIndex].caption"
            draggable="false"
            class="max-w-full object-contain"
            style="
              max-width: 100%;
              max-height: 100%;
              display: block;"
          >

        </button>
                                
        <!--CAROUSEL Caption-->
        <div v-show="imageItems[currentIndex].caption && imageItems[currentIndex].caption != ''"
          class="w-fit brg-txt-caption mt-2"
          > 
          <p> {{ imageItems[currentIndex].caption }} </p>
        </div>
                                
      </div>

    </div>

  </div>


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
      <img
        :src="item.image"
        class="object-contain max-w-md"
      >
      <p>{{ item.caption }}</p>
      <br>
      
      <p>{{ item.artwork }}</p>
      <br>
      
      <NuxtLink />
      <br>
      <br>
      <br>
    </div>
  </div>





</template>
