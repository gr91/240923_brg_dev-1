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
const contentPath = `/home/${locale.value}/home-project`;

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



//---------------- CAROUSEL SETTING ----------------------

const currentIndex = ref(0);
const isImageReady = ref(true); // Flag to track if the next image is ready
let interval;

//Preload adn validate next image
async function preloadNextImage(index) {

  const nextIndex = (index + 1) % imageItems.length; //Calculate the next index
  const img = new Image();

  //Return a promise that resolve when image is fully loaded
  return new Promise(resolve => {

    img.src = imageItems[nextIndex].image;
    img.onload = () => {
      isImageReady.value = true; //Mark image as ready
      resolve();
    }
    img.onerror = () => {
      isImageReady.value = true; // Handle errors gracefully
      resolve();
    }

  });

};

//Start carousel
async function updateImage() {
  if(!isImageReady.value) return; //skip update if the image is not ready

  isImageReady.value = false; // mark as not ready while loading
  await preloadNextImage(currentIndex.value); // //Preload the image

  //Update index only if preload is completed
  currentIndex.value = (currentIndex.value +1 ) % imageItems.length;
};

//Initialize carousel
onMounted(() => {
  interval = setInterval(updateImage, 4000);
});

onBeforeUnmount(() => {
  // Clear the interval on component unmount
  clearInterval(interval);
});


//---------------- MODAL SETTING ----------------------

const modalArtImageIsOpen = ref(false);

// Define the reactive object
const modalImage = ref({ value: '' });
const modalCaption = ref({ value: '' });

// Update function without TypeScript type annotations
function updateThisMediaImage(modalImage, currentImage) {
  modalImage.value = currentImage;
}

// Update function without TypeScript type annotations
function updateThisMediaCaption(modalCaption, currentCaption) {
    modalCaption.value = currentCaption;
}

//--------------------------------------------------------------


</script>



<template >




  <!--FIT TO SCREEN section-->
  <div class="w-full h-dvh mx-auto flex flex-col pt-12 md:pt-24 ">

        <!-- NEW CAROUSEL -->
    <div
        class="w-full h-full flex justify-center items-center px-4 pb-4 md:pb-10"
        style="border: solid lightgray 2px;"
        >
                
      <div
        class="h-full w-fit flex flex-col justify-start items-start p-4"
        style="border: solid gray 2px;"
        >
                
        <!--CAROUSEL Images-->
        <div class="flex-auto"
          style="border: solid green 3px;"
          >

          <NuxtImg
            preload
            :src="imageItems[currentIndex].image" :alt="imageItems[currentIndex].caption"
            format="webp"
  
            class=" object-contain "
            style="border: solid red 3px;"
          />

        </div>
          
          <!--CAROUSEL Caption-->
          <div v-show="imageItems[currentIndex].caption && imageItems[currentIndex].caption != ''"
          class=" flex-0 w-fit brg-txt-caption mt-2"
          style="border: solid green 3px;"
          > 
          <p><strong>The Current image is:</strong></p>
          <p> {{ imageItems[currentIndex].caption }} </p>
          <p>----------------</p>
          <p><strong>The Next image is:</strong></p>
          <p> {{ imageItems[currentIndex+1].caption }} </p>
        </div>
                                
      </div>

    </div>

  </div>


  <!--IMAGE MODAL-->
  <UModal
    v-model="modalArtImageIsOpen"
    :ui="{ overlay: {background: 'bg-BRG-white opacity-95'} }"
    fullscreen
    >

      <div class="h-full w-full  mx-auto px-4 pb-12 pt-2 flex flex-col gap-2">


        <div class="h-8 flex-none flex justify-between items-center ">
          <p class="brg-txt-body">
            {{ modalCaption.value }}
          </p>

          <button
              @click="modalArtImageIsOpen = false"
              class="brg-cta brg-txt-button h-4 "
              >
              {{ $t('close') }}
          </button>

        </div>


        <div class="flex-1 overflow-hidden flex w-fit mx-auto">
          <img
            :src="modalImage.value"
            class="object-contain h-full w-full"
            >
        </div>
            

      </div>            

      
  </UModal>




</template>
