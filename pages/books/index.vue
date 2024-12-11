<script setup lang="ts">


//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

//produce content path and dynamic key based on locale
const contentPath = `/books/${locale.value}`;
const myKey = `HelloBooks-${locale.value}`;

//execute content query
const { data: books } = await useAsyncData(myKey, () => {
    return queryContent(contentPath)
    .sort({year: -1})
    .find()
});    


//nuxt ui modal config
const modalMediaImageIsOpen = ref(false);
const modalImage = ref({value: ''});
const modalCaption = ref({value: ''});

function updateThisMediaImage (
    modalImage: {value: string},
    currentImage: string) {
        modalImage.value = currentImage;
};

function updateThisMediaCaption (
    modalCaption: {value: string},
    currentCaption: string) {
        modalCaption.value = currentCaption;
};


</script>

<template>

    <div class="h-32 md:h-24"></div>


    <div class="mt-8 px-4" >
    
        <div v-for="book in books" :key="book.slug" class="w-full max-w-[320px] md:max-w-sm pb-12 mb-12" > <!--style="border-bottom: solid lightgray;"-->
            
            <!--COVER-->
            <div class="drop-shadow-xl w-full max-w-[320px] md:max-w-sm">
                <NuxtImg
                    preload
                    :src="book.cover"
                    sizes="400px md:1200px"
                    format="webp"

                    class="w-full mb-4"
                    />
            </div>
            
            <!--HEADING-->
            <div class="mb-4">
                <p class="brg-txt-body">{{ book.year }}</p>
                <h1 class="brg-txt-heading">{{ book.title }}</h1>
                <h1 class="brg-txt-heading">{{ book.subtitle }}</h1>
            </div>
            
            <!--TEXT-->
            <div class="mb-4 brg-txt-body">
                <MDC :value="book.description" />
            </div>
            
            <!--BUTTON-->
            <div class="mt-6 mb-8">
                <div class="w-fit brg-txt-button">
                    <div v-if="book.order == ('Mail')" class="brg-cta">
                        <a :href="`mailto:${book.address}`"> {{ $t('order') }} </a>    
                    </div>
                    <div v-else-if="book.order == ('Website')" class="brg-cta">
                        <a :href=book.address target="_blank"> {{ $t('order') }} </a>
                    </div>
                    <div v-else class="unselected">
                        <p> {{ $t('unavailable') }} </p>
                    </div>
                </div>
            </div>




            <!--MEDIA SESSION-->
            <div>




                <!--IMAGES-->
                <div v-if="book.mediaimages" class="mb-8"> 

                    <div class="max-w-[320px] md:max-w-sm flex flex-wrap items-start gap-2 mb-2">

                        <button v-for="image in book.mediaimages"
                            @click="
                                modalMediaImageIsOpen = true;
                                updateThisMediaImage(modalImage, image.image)
                                updateThisMediaCaption(modalCaption, book.mediaimagescaption)"
                            >

                            <img :src="image.image" class="h-20 object-container">

                        </button>

                    </div>

                    <MDC :value="book.mediaimagescaption" class="brg-txt-caption"/>                    
                    
                </div>

                <!--IMAGE MODAL-->
                <UModal
                    v-model="modalMediaImageIsOpen"
                    :ui="{ overlay: {background: 'bg-BRG-white opacity-95'} }"
                    fullscreen
                    >

                    <div class="h-full w-full  mx-auto px-4 pb-12 pt-2 flex flex-col gap-2" >

                        <div class="h-8 flex-none flex justify-between items-center " >

                            <MDC :value="modalCaption.value" class="brg-txt-body"/>

                            <button
                                @click="modalMediaImageIsOpen = false"
                                class="brg-cta brg-txt-button h-4 "
                                >
                                {{ $t('close') }}
                            </button>

                        </div>

                        <div class="flex-1 overflow-hidden flex w-fit mx-auto" >
                            <img :src="modalImage.value"
                                class="object-contain h-full w-full"
                                >
                        </div>

                    </div>            
                    
                </UModal>




                <!--VIDEO-->
                <div v-if="book.mediavideo" class="mb-8" > 
                
                    <div class="max-w-[320px] md:max-w-sm flex items-center mb-2">
                        <YouTubeVideoPlayer :VideoId="book.mediavideo" class="w-full"/>
                    </div>
                
                    <MDC :value="book.mediavideocaption" class="brg-txt-caption"/>                    
                
                </div>
        


        
            </div>
    



        </div>
    
    </div>

</template>


