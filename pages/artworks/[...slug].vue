<script setup>
const route = useRoute()
      
const actualPath = route.path.replace(/\/$/, '');

const myKey = actualPath.replace("/artworks/", "");
      
const { data: artwork } = await useAsyncData(myKey, () =>
    queryContent(actualPath).findOne()
);

//------ Create and populate and array with images'URLs and caption for 'artwork' array ------//
const items = artwork.value.images.map(image => ({
  image: image.image,   // The image URL from the markdown file
  caption: image.caption // The caption from the markdown file
}))
;





</script>



<!--Nuxt page-->
<template>

    <!--FIT TO SCREEN-->        
    <div class="w-full h-svh mx-auto mb-1 flex flex-col"> <!--style="border:solid, black"-->

        
        <!--ARTWORK HEADER -->
        
        <!--Container for Header ans AppHeader alignment / fixed positionheight background fill-->
        <div class="fixed z-10 mx-auto w-full max-w-7xl pr-4 md:pr-8 bg-BRG-white"> <!--style="border:solid, blue"-->
            
            <!--Empty section alligned to AppHeader-->
            <div  class="w-full h-14 md:h-24 flex-none"> <!---->
            </div>   
            
            <!--ARTWORK Heading section + navigation buttons-->
            <div class="w-full h-24 flex-none">  <!--style="border:solid, blue"-->
                <div  class="flex flex-row justify-between "> <!--style="border:solid, aqua"-->
                    
                    <div  class=" flex-col justify-start items-start inline-flex" > <!--style="border:solid green"-->
                        <div class="self-stretch brg-body-text">
                            <p>{{ artwork.beginyear }}—{{ artwork.endyear }}</p>
                        </div>
                        <div class="self-stretch brg-heading-text">
                            <p style="font-size: 24px;">{{ artwork.title }}</p>
                        </div>
                    </div> 
                    
                    <div  class=" flex justify-start items-start gap-4"> <!--style="border: solid greenyellow"-->
                        <div class="self-stretch brg-body-text">Images</div>
                        <div class="self-stretch brg-body-text">Texts</div>
                    </div>
                    
                </div>
            </div>
        </div>
        


        <!--Empty section alligned to AppHeader / fixed height-->
        <div  class="w-full h-48 mb-1 flex-none "></div> <!--style="border:solid, blue"-->
        


        <!--Images Carousel section / fill height-->
        <div style="border:solid blue 3px; " class="w-full mx-auto p-4 flex-1 min-h-0" >
        
            <UCarousel
                v-slot="{ item, index }"
                :items="items"
                :ui="{ item: 'w-full' }"
                
                :prev-button="{
                    color: '',
                    icon: 'i-heroicons-arrow-left-20-solid',
                    class: '-start'
                }"
                :next-button="{
                    color: '',
                    icon: 'i-heroicons-arrow-right-20-solid',
                    class: '-end'
                }"
                arrows
                
                style="border:solid aqua"
                class="flex mx-auto h-full "
            >
    
    
                <div style="border:solid red" class="mx-auto max-w-[90%] flex flex-col " > <!--min-h-0-->  

                    <div style="border:solid green 3px" class="mx-auto flex-1 min-h-0">
                        <img :src="item.image" :alt="item.caption" draggable="false"
                            style="
                            max-width: 100%;
                            max-height: 100%;
                            display: block;
                            margin: auto;" >
                    </div>
                        
                    <div style="border:solid green 2px" class="flex-none w-fit">
                        <p>{{ item.caption }} </p>
                    </div>

                    <!--
                        <div style="border:solid black" class="mb-2">
                        </div>
        
                        <div style="border:solid gray" class=" ">
                        </div>
                    -->

                </div>
    
    
            </UCarousel>
        </div>    
        

        
    </div>
    
    
    
    <!--SCROLL SECTION with texts-->        
    <p>{{ artwork.bodyita }}</p>
    
    <br><br>
    <p>{{ route }}</p>
    
    <br><br>
    <p>{{ actualPath }}</p>

    <br><br>
    <p>{{ myKey }}</p>
    
    
    
    <!--
        <div style="border: solid black" class="h-svh ">
            <div style="border:solid, blue" class="w-full mx-auto p-1 ">
                <div  v-for="(img) in artwork.images" key="index" >
                    <img class="w-80 mx-auto" :src="img.image" />
                    <p>{{ img.caption }}</p>
                    <p>{{ img.image }}</p>
                    <hr>
                </div>
            </div>
        </div>
    -->




            <!--
                <div style="border: solid aquamarine" class="mt-28 h-screen">
                </div>
            -->
                
                
                
                
                
            <!--
                <div style="border: solid blue" id="controls-carousel" class="w-full grow">
                    <div style="border:solid cyan" class="relative overflow-hidden ">
                        <div  v-for="(img, index) in artwork.images" key="index" >
                            <img :src="img.image" class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            <p>{{ img.caption }}</p>
                            <hr>
                        </div>
                    </div>
                </div>   
            -->    



    
    
    
    
    <!-------VIDEO EMBEDDING from vimeo using "video" field from collection------->

    <!--
        <div {{ artwork.video }}>
        </div>

        <div style="padding:75% 0 0 0;position:relative;">
            <iframe src="https://player.vimeo.com/video/1014856847?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="-2022 HE SHE ME  01_4">      
            </iframe>
        </div>
    -->


</template>
