<script setup>
const route = useRoute()
      
const actualPath = route.path.replace(/\/$/, '');

const myKey = actualPath.replace("/artworks/", "");
      
const { data: artwork } = await useAsyncData(myKey, () =>
    queryContent(actualPath).findOne()
);

//------ Create and populate and array with images'URLs and caption for 'artwork' array ------//
const items = artwork.value.images.map(image => ({
  image: image.image,   // The image URL from the markdown file
  caption: image.caption // The caption from the markdown file
}))
;





</script>



<!--Nuxt page-->
<template>

    <div class="w-full h-80 mt-40">
        <p>Template page:</p>
        
        <br>
        <p>{{ actualPath }}</p>

        <br>
        <p>{{ myKey }}</p>

        <br>
        <p>{{ artwork }}</p>

        <br>
        <p>{{ artwork.beginyear }}</p>
        <p>{{ artwork.title }}</p>

        <div v-for="item of items" >
            <img :src="item.image">
            <p>{{ item.caption }}</p>
        </div>
    </div>

</template>
