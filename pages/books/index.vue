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
    .sort({beginyear: 1, endyear: 1})
    .find()
});    


//nuxt ui modal config
const isOpen = ref(false);

const modalImage = ref({value: 'asd'});
function updateThisMediaImage (
    modalImage: {value: string},
    currentImage: string) {
        modalImage.value = currentImage;
};


</script>

<template>
    <!----Variable test print----
    <p>----------------------------------------</p>
    <div class="mt-48"></div>
    <p>VARIABLES PRINT TEST</p>
    <p><strong>locale: </strong>{{ locale }}</p>
    <p><strong>contentPath: </strong>{{ contentPath }}</p>
    <p><strong>myKey: </strong>{{ myKey }}</p>
    <p>----------------------------------------</p>
    -->

    <div style="border:solid red" class="h-32 md:h-24"></div>


    <div class="mt-8 px-4">
    
        <div v-for="book in books" :key="book.slug" class="w-full max-w-sm md:max-w-md mb-20">
            
            <!--COVER-->
            <div class="drop-shadow-xl max-w-[320px] md:max-w-sm">
                <img :src="book.cover" class="w-full mb-4">
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
            <div class="my-8">
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
                <div>
    
                    <div v-if="book.mediaimages"
                        class="max-w-[320px] md:max-w-sm mb-4 flex flex-row gap-4"
                    >
    
                        <div v-for="image in book.mediaimages"
                            class="flex"
                        >
                            <img :src="image.image"
                                @click="isOpen = true; updateThisMediaImage(modalImage, image.image)"
                            >
                        </div>
    
                    </div>
    
                    <UModal
                        v-model="isOpen"
                    >
                        <img :src="modalImage.value">
                    </UModal>
    
                </div>



                <!--VIDEO-->
                <div v-if="book.mediavideo"
                    class="h-full max-w-[320px] md:max-w-sm flex items-center"
                >
                    <div class="flex-auto">
                        <VimeoVideoPlayer :VideoId="book.mediavideo"/>
                    </div>
                </div>


                   
            </div>


            <br><br><br>
            

        </div>
    
    </div>

</template>
