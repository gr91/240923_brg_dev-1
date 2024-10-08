<script setup>
const route = useRoute()
      
const actualPath = route.path.replace(/\/$/, '');
      
const { data: project } = await useAsyncData(`hello`, () =>
    queryContent(actualPath).findOne()
);



</script>




<template>
    <!--
        <AppHeader />
    -->
    <div style="border: solid aquamarine" class="p-4 h-screen">

        <div style="border:solid green" class="h-[52px] flex-col justify-start items-start inline-flex" >
            <div class="self-stretch brg-body-text">
                <p>{{ project.beginyear }}—{{ project.endyear }}</p>
            </div>
            <div class="self-stretch brg-heading-text">
                <p>{{ project.title }}</p>
            </div>
        </div> 
    
        
        <div style="border: solid blue" id="controls-carousel" class="w-full">
            <div style="border:solid cyan" class="relative overflow-hidden ">
                <div  v-for="(img, index) in project.images" key="index" >
                    <img :src="img.image" class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    <p>{{ img.caption }}</p>
                    <hr>
                </div>
            </div>
        </div>


    </div>

    
    <hr>
    <div style="border: solid black">
        <p>{{ project.bodyita }}</p>
    </div>
    
    
    
    <!--
        <div style="border:solid, blue" class="w-full mx-auto p-1 ">
            <div  v-for="(img, index) in project.images" key="index" >
                <img class="w-[80px] mx-auto" :src="img.image" />
                <p>{{ img.caption }}</p>
                <hr>
            </div>
        </div>
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
</template>
