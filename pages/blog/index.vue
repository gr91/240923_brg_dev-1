<!--
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
-->



<template>
    <AppHeader />
    <div>
        <p>Placeholder text in blog/index.vue page</p>
    </div>

<!--
    <div>
        <li v-for="post of posts" :key="post.slug">
            <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
        </li>
    </div>
-->

</template>
  