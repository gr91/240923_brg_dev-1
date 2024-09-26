<script setup>
 const route = useRoute()
      
const actualPath = route.path.replace(/\/$/, '');
      
const { data: post } = await useAsyncData(`hello`, () =>
    queryContent(actualPath).findOne()
);
</script>


<template>
  <div>
    <AppHeader />
    <!-- <NuxtLink to="/artwork">&lt; Back</NuxtLink> -->
    <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
    </nav>
    <h1 class="text-4xl">
      {{ post.title }}
    </h1>
    <p>{{ post.description }}</p>
    <hr>
    <ContentDoc />
  </div>
</template>
