<script setup>
const route = useRoute()
      
const actualPath = route.path.replace(/\/$/, '');
      
const { data: artwork } = await useAsyncData(`hello`, () =>
    queryContent(actualPath).findOne()
);
</script>


<template>
  <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
  </nav>
  <h1 class="text-4xl">
    {{ artwork.title }}
  </h1>
  <p>{{ artwork.description }}</p>
  <hr>
  <ContentDoc />
</template>
