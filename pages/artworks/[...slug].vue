<script setup>
refreshNuxtData()
const route = useRoute()
      
const actualPath = route.path.replace(/\/$/, '');
      
const { data: artwork } = await useAsyncData(`hello`, () =>
    queryContent(actualPath).findOne()
);
</script>


<template>
  <main class="mx-auto max-w-7xl space-y-6">
    <AppHeader />
    <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
    </nav>
    <h1 class="text-4xl">
      {{ artwork.title }}
    </h1>
    <p>{{ artwork.description }}</p>
    <hr>
    <ContentDoc />
  </main>
</template>
