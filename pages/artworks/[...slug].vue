<script setup >


//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

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

//create and populate and array with images'URLs and caption for 'artwork' array
const imageItems = (artwork.value?.images && artwork.value.images.length > 0)
    ? artwork.value.images.map(image => ({
    image: image.image,   // The image URL from the markdown file
    caption: image.caption // The caption from the markdown file
    }))
    : [];




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

                <!------------------MODIFY CONDITIONS HERE----------------->
                <div v-if="artwork.inprogress == true">
                    <p>{{ artwork.beginyear }} – In progress</p>
                </div>
                <div v-else>
                    <p v-if="artwork.endyear"> {{ artwork.beginyear }}–{{ artwork.endyear }} </p>
                    <p v-else>{{ artwork.beginyear }}</p>
                </div>
                <!------------------MODIFY CONDITIONS HERE----------------->
                
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
        

        <!--PHOTO PROJECT-->
        <div v-if="artwork.category != 'Video'" class="h-full" >
            
            <!--CAROUSEL-->
            <UCarousel
            v-slot="{ item, index }"
            :items="imageItems"
            :ui="{ item: 'w-full px-4 md:px-0'}"
            ref="carouselRef"
            style=""
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
                        <div class="w-fit brg-txt-caption mt-2"> 
                            <p> {{ item.caption }} </p>
                        </div>
                        
                    </div>
                    
                </UCarousel>
                
            </div>
            
        
            
        <!--VIDEO PROJECT-->
        <div v-else
            class="h-full px-4 flex items-center"
        >

            <div class="flex-auto">
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
    



</template>
