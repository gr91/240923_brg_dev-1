<script setup lang="ts">
//const route = useRoute()
const { data: artworks } = await useAsyncData('artworks', () => {
  return queryContent('/artworks').find()
})
</script>

<template>
  <p><strong>artworks</strong>/index.vue page</p>

  <div v-for="artwork of artworks" :key="artwork.slug">
    <NuxtLink :to="artwork._path">
      <div class="h-[52px] flex-col justify-start items-start inline-flex" >
        <div class="self-stretch text-[#141414] text-sm font-normal font-['Neue Haas Unica W1G']">
          <p>{{ artwork.date }}</p>
        </div>
        <div class="self-stretch text-[#141414] text-2xl font-normal font-['Neue Haas Unica W1G'] leading-[31.20px]">
          <p>{{ artwork.title }}</p>
        </div>
      </div>         
    </NuxtLink>
  </div>

</template>
  