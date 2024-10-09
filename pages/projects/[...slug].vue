<script setup>
const route = useRoute()
      
const actualPath = route.path.replace(/\/$/, '');
      
const { data: project } = await useAsyncData(`hello`, () =>
    queryContent(actualPath).findOne()
);



</script>




<template>
        <div style="border:solid black" class="grow overflow-scroll">

            <div class="flex flex-col">

                <div class="flex flex-row justify-between">
                    <div style="border:solid green" class=" flex-col justify-start items-start inline-flex" >
                        <div class="self-stretch brg-body-text">
                            <p>{{ project.beginyear }}—{{ project.endyear }}</p>
                        </div>
                        <div class="self-stretch brg-heading-text">
                            <p style="font-size: 32px;">{{ project.title }}</p>
                        </div>
                    </div> 
                    <div style="border: solid greenyellow" class=" flex justify-start items-start gap-4">
                        <div class="self-stretch brg-body-text">Images</div>
                        <div class="self-stretch brg-body-text">Texts</div>
                    </div>
                </div>

                <!--
                    <div style="border:solid, blue" class="w-full mx-auto p-1 ">
                        <div  v-for="(img, index) in project.images" key="index" >
                            <img class="w-80 mx-auto" :src="img.image" />
                            <p>{{ img.caption }}</p>
                            <hr>
                        </div>
                    </div>
                -->

                <div style="border:solid, blue" class="w-full mx-auto p-1 h-svh">
                    <p>My paragraph</p>
                </div>

                <div style="border: solid black">
                    <p>{{ project.bodyita }}</p>
                </div>

            </div>
            
        </div>
            
            <!--
                <div style="border: solid aquamarine" class="mt-28 h-screen">
                </div>
                -->
                
                
                
                
                
                <!--
                    <div style="border: solid blue" id="controls-carousel" class="w-full grow">
                        <div style="border:solid cyan" class="relative overflow-hidden ">
                            <div  v-for="(img, index) in project.images" key="index" >
                                <img :src="img.image" class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                <p>{{ img.caption }}</p>
                                <hr>
                            </div>
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
