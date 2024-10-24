<script setup lang="ts">

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()

const route = useRoute()      
const actualPath = route.path.replace(/\/$/, '');

//edit path to include en/it folder 
const myPath = "/bio" + actualPath.replace("/bio", "");

//produce a unique key for useAsyncData composable
const myKey = myPath.replace('/bio/', 'Hellobio-');

//const route = useRoute()
const { data: bio } = await useAsyncData(myKey, () => {
  return queryContent(myPath)
  .find()
});

//create and populate and array with separate list




</script>


<template>
    <!--
        <div class="mt-40">
    
            <p><strong>actualPath</strong></p>
            <p>{{ actualPath }}</p>
            <br>
    
            <p><strong>myPath</strong></p>
            <p>{{ myPath }}</p>
            <br>
    
            <p><strong>myKey</strong></p>
            <p>{{ myKey }}</p>
            <br>
    
            <p><strong>biodata</strong></p>
            <p>{{ bio }}</p>
            <br>
    
            <p><strong>biodata</strong></p>
            <p>{{  }}</p>
            <br>
    
            
    
        </div>
    -->
</template>