<script setup lang="ts">

//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

//produce content path and dynamic key based on locale
const contentPath = '/newbio';
const myKey = 'thisQuery';




//execute content query
const { data: newbiodata } = await useAsyncData('newbiodata', () => {
    return queryContent(contentPath)
    .find()
});

//execute content query
const { data: extractBiography } = await useAsyncData('biography', () => {
    return queryContent(contentPath)
    .where({_path: '/newbio/biography'})
    .find()
});
const biography = extractBiography.value[0];

//execute content query
const { data: extractAwards } = await useAsyncData('awards', () => {
    return queryContent(contentPath)
    .where({_path: '/newbio/awards'})
    .find()
});

const awards = extractAwards.value[0].it.award;


</script>

<template>
    <div class="mt-48"></div>
    <!--
        <p>----------------------------------------</p>
        <div class="mt-48"></div>
        <p>VARIABLES PRINT TEST</p>
        <p><strong>locale: </strong>{{ locale }}</p>
        <p><strong>contentPath: </strong>{{ contentPath }}</p>
        <p><strong>myKey: </strong>{{ myKey }}</p>
        
        <p>----------------------------------------</p>
        <br>
        <br>
        
        <p><strong>newbiodata</strong></p>
        <p>{{ newbiodata }}</p>
        <br>
        
        <p>----------------------------------------</p>
        <p><strong>biography</strong></p>
        <p>{{ biography }}</p>
        <br>
        
        <p><strong>biography / content</strong></p>
        <MDC :value=biography.it.text />
        <br>
        
        <p>----------------------------------------</p>
        <p><strong>extractAwards</strong></p>
        <p>{{ extractAwards }}</p>
        <br>
        
        <p><strong>awards</strong></p>
        <p>{{ awards }}</p>
        <br>
        -->

    <!--Awards List-->
    <div>
        <h3 class="brg-txt-heading mb-2">Awards</h3>
        <div v-for="award in awards" class="w-full flex flex-row brg-txt-body" style="border:solid lightgray">
            <div class="w-16 flex-0" style="border:solid red">
                <p>{{ award.year }}</p>
            </div>
            <div class="flex-1" style="border:solid blue">
                <p>{{ award.text }}</p>
            </div>
        </div>
    </div>
    
    <!--Solo Exhibition List-->
    <div></div>

    <!--Group Exhibition List-->
    <div></div>

    <!--Personal Pubblication List-->
    <div></div>


    
</template>
