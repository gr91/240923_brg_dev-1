<script setup  >


//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();



//---------------- CONTENT QUERY ----------------------
const route = useRoute()      
const actualPath = route.path.replace(/\/$/, '');

//edit actualPath to remove locale prefix and incldue locale sub folder in content path
const marker = '/artworks/';
const index = actualPath.indexOf(marker);
const cleanedPath = index !== -1 ? actualPath.substring(index + marker.length) : actualPath;
const thisArtworkPath = `/artworks/${locale.value}/${cleanedPath}`;

//produce a unique key for useAsyncData that includes locale
const myKey = `${locale.value}-${cleanedPath}`;

//query data via useAsyncData composable
const { data: artwork } = await useAsyncData(myKey, () =>
    queryContent(thisArtworkPath).findOne()
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
const modalArtImageIsOpen = ref(false);
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



//-------------SCROLL SETTING------------------------------

// set scrollTo function to ensure scroll to section not affect browser history
const scrollTo = (hash) => {
  const element = document.querySelector(hash)
  if (element) {

    // Perform the smooth scroll
    element.scrollIntoView({ behavior: 'smooth' });

    // After scrolling, replace the state again to maintain the current URL
    setTimeout(() => {
      history.replaceState(null, null, hash);
    }, 500);  // Add a slight delay to let the scroll complete smoothly
  }
}



</script>



<template>




    <!--ARTWORKS header-->
    <div class="fixed top-12 md:top-24 w-full max-w-7xl px-4 z-40 bg-BRG-white flex flex-col md:flex-row justify-between">
        
        <!--ARTWORKS Title-->
        <div class="h-30 md:h-24 flex-col justify-start items-start inline-flex" > 
            <div class="self-stretch brg-txt-body">

                <div v-if="artwork.inprogress == true">
                    <p>{{ artwork.beginyear }} – {{ $t('inprogress') }}</p>
                </div>
                <div v-else>
                    <p v-if="artwork.endyear && artwork.endyear != ''"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                    <p v-else>{{ artwork.beginyear }}</p>
                </div>
                
            </div>

            <div class="self-stretch brg-txt-heading">
                <h1>{{ artwork.title }}</h1>
                <h1>{{ artwork.subtitle }}</h1>
            </div>

        </div> 
        
        
        <!--ARTWORKA Navigation-->
        <div class="h-12 flex flex-row gap-4 items-center md:items-start md:pt-1 md:justify-end"> 
            
            <a href="#anchorimg" @click.prevent="scrollTo('#anchorimg')"  >
                <div v-if="artwork.category=='Photo' || artwork.category=='Other'" class="h-4 brg-txt-button brg-cta">{{ $t('images') }}</div>
                <div v-else class="h-4 brg-txt-button brg-cta">{{ $t('videos') }}</div>
            </a>

            <a href="#anchortxt" @click.prevent="scrollTo('#anchortxt')">
                <div class="h-4 brg-txt-button brg-cta">{{ $t('texts') }}</div>
            </a>
            
        </div>
        
    </div>

    

    <!--FIT TO SCREEN section-->
    <div class="w-full h-dvh mx-auto flex flex-col pb-4 pt-56 md:pt-52" id="anchorimg"> 
        



        <!-- PHOTO PROJECT -->
        <div v-if="artwork.category != 'Video'"
            class="h-full w-full px-4"
            >

            <!-- NEW CAROUSEL -->
            <div class="w-full h-full flex justify-center items-center">
                
                <div class="h-full w-fit flex flex-col justify-start items-start" >
                
                    <!--CAROUSEL Images-->
                    <button
                        @click="
                            modalArtImageIsOpen = true;
                            updateThisMediaImage(modalImage, imageItems[currentIndex].image);
                            updateThisMediaCaption(modalCaption, imageItems[currentIndex].caption)"
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
                        <p>{{ imageItems[currentIndex].caption }} </p>
                    </div>
                                
                </div>

            </div>

            
        </div>

        
        
                
        <!--VIDEO PROJECT-->
        <div v-else class="h-full px-4 flex items-center">
            
            <div class="w-full h-full ">
                <VimeoVideoPlayer :VideoId="artwork.video"/>
            </div>
            
        </div>
    


        
    </div>
    
    


    <!--SCROLL section-->
    <div
        class="w-full md:max-w-xl min-h-dvh p-4 scroll-mt-36 md:scroll-mt-48 brg-txt-body"
        id="anchortxt"
        >
        
        <div v-for="item in artwork.description">
            <MDC :value="item.text" class="mb-12"/>
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