<script setup lang="ts">

//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

//produce content path and dynamic key based on locale
const contentPath = `/bio/${locale.value}`;
const myKey = `HelloBio-${locale.value}`;

//execute content query
const { data: bio } = await useAsyncData(myKey, () => {
    return queryContent(contentPath)
    .sort({beginyear: 1, endyear: 1})
    .find()
});    

//create and populate and array with separate list




</script>


<template>
    <!--
    -->
    <div class="mt-40"></div>
    <p>----------------------------------------</p>
    <p>VARIABLES PRINT TEST</p>
    <p><strong>locale: </strong>{{ locale }}</p>
    <p><strong>contentPath: </strong>{{ contentPath }}</p>
    <p><strong>myKey: </strong>{{ myKey }}</p>
    <p>----------------------------------------</p>

</template>