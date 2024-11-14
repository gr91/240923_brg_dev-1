<script setup lang="ts">

const VimeoPlayerProps = defineProps(['VideoId'])
const SourceVideoId = `https://player.vimeo.com/video/${VimeoPlayerProps.VideoId}`;

</script>



<template>

    <div
        style="padding:56.25% 0 0 0;position:relative;"
    >

        <iframe
            :src="SourceVideoId"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
        >
        </iframe>

    </div>

</template>


