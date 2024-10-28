<script setup lang="ts">

//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

//produce content path and dynamic key based on locale
const contentPath = '/newbio';
const myKey = 'thisQuery';

//execute content query
const { data: newbiodata } = await useAsyncData(myKey, () => {
    return queryContent(contentPath)
    .find()
});


</script>

<template>
    <div class="mt-48"></div>
    
    <p>----------------------------------------</p>
    <div class="mt-48"></div>
    <p>VARIABLES PRINT TEST</p>
    <p><strong>locale: </strong>{{ locale }}</p>
    <p><strong>contentPath: </strong>{{ contentPath }}</p>
    <p><strong>myKey: </strong>{{ myKey }}</p>
    
    <br>
    <p><strong>newbiodata</strong></p>
    <p>{{ newbiodata }}</p>
    <br>

    <br><br><br>
    <div v-for="item in newbiodata">
        <p>{{ item }}</p><br>
    </div>
    <!--
    -->
    
</template>