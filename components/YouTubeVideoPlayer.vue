<script setup lang="ts">

const VimeoPlayerProps = defineProps(['VideoId'])
const SourceVideoId = `https://www.youtube.com/embed/${VimeoPlayerProps.VideoId}?si=3GbwcU7jviXdVk0R`;

</script>


<template>

    <iframe
        :src="SourceVideoId"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        width="100%"
        height="200px"
    >
    </iframe>
    

</template>