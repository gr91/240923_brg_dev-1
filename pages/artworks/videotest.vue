<script setup lang="ts">



// variable for VIMEO embed code
const artworkVideoId = "1026150751";

</script>

<template>
    <div class="h-[240px]" style="border:solid red">
    </div>

    <p><strong>artworkVideoId</strong>: {{ artworkVideoId }}</p><br>

    <p>-----------------------------------</p>
    <VimeoVideoPlayer :VideoId="artworkVideoId"/>

    




    
    <!--Embed code from NUXT SCRIPT
    <div>
        
        <div class="flex items-center justify-center p-5">
            <ScriptVimeoPlayer :id="331567154" ref="video" class="group" @loaded="isLoaded = true" @play="isPlaying = true" @pause="isPlaying = false">
                <template #awaitingLoad>
                    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 group-hover:bg-blue-700 transition rounded px-6 py-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" class="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z" fill="currentColor" /></svg>
                    </div>
                </template>
            </ScriptVimeoPlayer>
        </div>
        
        <div class="text-center">
            <UAlert v-if="!isLoaded" class="mb-5" size="sm" variant="soft" title="Clicks the video!" description="Clicking the video will load the Vimeo iframe and start the video." />
            <UButton v-if="isLoaded && !isPlaying" @click="play">
                Play Video
            </UButton>
        </div>
        
    </div>
    -->
    



    <!--Embed code from VIMEO
    <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe
        
        src="https://player.vimeo.com/video/1026145440?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        >
    </iframe>
    </div>
    -->



    <!--HTML Video tag
    <video width="320" height="240" controls>
        <source src="https://vimeo.com/1026145440?share=copy#t=0" >
        Your browser does not support the video tag.
    </video> 
    -->
    
</template>
