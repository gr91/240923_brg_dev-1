<script setup lang="ts">
const route = useRoute()

//add Netlify Identity Widget 
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});


</script>

<template >
  <!--
    <AppHeader />
    <div>
      <h1 class="text-4xl font-bold text-center text-blue-500">Nuxt Routing set up successfully!</h1>
      <p>Current route: {{ route.path }}</p>
      <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
      <p>My placeholder paragraph in "index.vue"</p>
    </div>
  -->

  <!-- Example from Decap nuxt/content installation process -->
  <div>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li>
  </div>


</template>


<!---->
Example from Decap nuxt/content installation process
<script>
export default {
   async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
};

</script>