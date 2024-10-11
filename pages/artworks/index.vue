<script setup lang="ts">
//const route = useRoute()
const { data: artworks } = await useAsyncData('artworks', () => {
  return queryContent('/artworks')
  .sort({beginyear: 1, endyear: 1})
  .find()
})


</script>

<template>
    
    <p><strong>artworks</strong>/index.vue page</p>
  
    <div v-for="artwork of artworks" :key="artwork.slug">
        <NuxtLink :to="artwork._path">
            <div >
                <div class="brg-body-text">
                    <p>{{ artwork.beginyear }}—{{ artwork.endyear }}</p>
                </div>
                <div class="brg-heading-text">
                    <p>{{ artwork.title }}</p>
                </div>
            </div>         
        </NuxtLink>
    </div>

</template>
