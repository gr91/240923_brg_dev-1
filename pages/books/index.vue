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

//---------------- MODAL SETTING ----------------------
const modalArtImageIsOpen = ref(false);

// Define the reactive object
const modalImage = ref({ value: '' });
const modalCaption = ref({ value: '' });

// Update function without TypeScript type annotations
function updateThisMediaImage(modalImage: { value: any; }, currentImage: any) {
  modalImage.value = currentImage;
}

// Update function without TypeScript type annotations
function updateThisMediaCaption(modalCaption: { value: any; }, currentCaption: any) {
    modalCaption.value = currentCaption;
}




</script>

<template>

    <div class="h-32 md:h-24"></div>


    <div class="mt-8 px-4" >
    
        <div v-for="book in books" :key="book.slug" class="w-full max-w-[320px] md:max-w-sm pb-12 mb-12" > <!--style="border-bottom: solid lightgray;"-->
            
            <!--COVER-->
            <button
                @click="
                    updateThisMediaImage(modalImage, book.cover);
                    updateThisMediaCaption(modalCaption, book.title)
                    modalArtImageIsOpen = true;
                "
                class="drop-shadow-xl w-full max-w-[320px] md:max-w-sm"
                >
                <div
                    >
                    
                    <img
                        :src="book.cover"
                        class="w-full mb-4"
                    >
                </div>
            </button>


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
                        <div v-for="image in book.mediaimages">

                            <button
                                @click="
                                    updateThisMediaImage(modalImage, image.image);
                                    updateThisMediaCaption(modalCaption, book.mediaimagescaption)
                                    modalArtImageIsOpen = true;
                                "
                                >
                                <img
                                    :src="image.image"
                                    class="h-20 object-container"
                                >
                            </button>

                        </div>
                    </div>

                    <MDC :value="book.mediaimagescaption" class="brg-txt-caption"/>                    
                    
                </div>

                
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


    <!--IMAGE MODAL-->
    <UModal
        v-model="modalArtImageIsOpen"
        :ui="{ overlay: {background: 'bg-BRG-white opacity-95'} }"
        fullscreen
        >

        <div class="h-full w-full  mx-auto px-4 pb-12 pt-2 flex flex-col gap-2">

            <div class="h-8 flex-none flex justify-between items-center ">

                <MDC :value="modalCaption.value" 
                    class="brg-txt-body"
                />

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


