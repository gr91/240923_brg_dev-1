<template>

  
    <main class="mx-auto max-w-7xl space-y-6">
        <AppHeader />
        <!-- <NuxtLink to="/blog">&lt; Back</NuxtLink> -->
        <nav class="mb-8" aria-label="go back">
            <router-back class="block" />
          </nav>
        <h1 class="text-4xl">
          {{ post.title }}
        </h1>
        <p>{{ post.description }}</p>
        <hr>
        <ContentDoc />
      </main>
  </template>
  
  <script setup>
  const route = useRoute()
  
  const actualPath = route.path.replace(/\/$/, '');
  
  const { data: post } = await useAsyncData(`hello`, () =>
      queryContent(actualPath).findOne()
  );
  </script>