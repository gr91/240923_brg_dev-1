<script setup lang="ts">

const VimeoPlayerProps = defineProps(['VideoId'])
const SourceVideoId = `https://player.vimeo.com/video/${VimeoPlayerProps.VideoId}`;

</script>



<template>

    <div
        class="h-full"
        style="position:relative;"
    >

        <iframe
            :src="SourceVideoId"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style="position:absolute;top:0;left:0;"
            class="w-full h-full"
        >
        </iframe>

    </div>

</template>


