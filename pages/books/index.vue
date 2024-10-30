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
    
        <div v-for="book in books" :key="book.slug" class="w-full max-w-sm md:max-w-md mb-12 " style="border:solid red">
        
            <img :src="book.cover" class="w-full mb-4">
        
            <div class="mb-4">
                <p class="brg-txt-body">{{ book.year }}</p>
                <h1 class="brg-txt-heading">{{ book.title }}</h1>
            </div>
        
            <div class="mb-4">
                <MDC :value="book.description" />
            </div>
            
            <div class="mb-4 h-5 brg-cta brg-txt-button">
                <div v-if="book.order == ('Mail')" >
                <a :href="`mailto:${book.address}`"> {{ $t('order') }} </a>    
                </div>
                <div v-else-if="book.order == ('Website')">
                <a :href=book.address target="_blank"> {{ $t('order') }} </a>
                </div>
                <div v-else class="unselected">
                <p> {{ $t('unavailable') }} </p>
                </div>
            </div>
        
        <!--
        -->
        
        </div>
    
  </div>

</template>
