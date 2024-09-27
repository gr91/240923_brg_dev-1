  <script setup>
  const route = useRoute()
  const { data: posts } = await useAsyncData('posts', () => {
    return queryContent('/artworks').find()
  })
  watch(() => route.query, () => refresh())

  </script>

<template >

    <main class="mx-auto max-w-7xl space-y-6">
      <AppHeader />
      <p><strong>artworks</strong>/index.vue page</p>

      <div v-for="post of posts" :key="post.slug">
        <NuxtLink :to="post._path">
          <div class="h-[52px] flex-col justify-start items-start inline-flex" >
            <div class="self-stretch text-[#141414] text-sm font-normal font-['Neue Haas Unica W1G']">
              <p>{{ post.date }}</p>
            </div>
            <div class="self-stretch text-[#141414] text-2xl font-normal font-['Neue Haas Unica W1G'] leading-[31.20px]">
              <p>{{ post.title }}</p>
            </div>
          </div>         
        </NuxtLink>
      </div>
    </main>

  </template>
  