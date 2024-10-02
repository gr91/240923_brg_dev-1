<script setup>
const route = useRoute()
      
const actualPath = route.path.replace(/\/$/, '');
      
const { data: project } = await useAsyncData(`hello`, () =>
    queryContent(actualPath).findOne()
);

const myImage = "static/img/alda-merini-.png"

</script>




<template>
  <main class="mx-auto max-w-7xl space-y-6">
    <AppHeader />
    
    <div class="h-[52px] flex-col justify-start items-start inline-flex" >
        <div class="self-stretch text-[#141414] text-sm font-normal font-['Neue Haas Unica W1G']">
            <p>{{ project.beginyear }}</p>
        </div>
        <div class="self-stretch text-[#141414] text-2xl font-normal font-['Neue Haas Unica W1G'] leading-[31.20px]">
            <p>{{ project.title }}</p>
        </div>

        <hr>
        <div>
            <p>{{ project.bodyita }}</p>
        </div>

        <hr>
        <div>
            <img src="./img/alda-merini-.png" width="500" height="600">
        </div>
    </div>         
    
    
    <!--
        <div>
            <UCarousel v-slot="{ item }" :items="items">
                <img :src="item" width="300" height="400" draggable="false">
            </UCarousel>
        </div>
        <ContentDoc />
    -->
    
    
    <!-------VIDEO EMBEDDING from vimeo using "video" field from collection------->

    <!--
        <div {{ project.video }}>
        </div>

        <div style="padding:75% 0 0 0;position:relative;">
            <iframe src="https://player.vimeo.com/video/1014856847?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="-2022 HE SHE ME  01_4">      
            </iframe>
        </div>
    -->
    
  </main>
</template>
