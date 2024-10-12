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
}));

</script>



<!--Nuxt page-->
<template>


    <!--FIT TO SCREEN-->
    <div style="border: solid red;" class="w-full h-svh mx-auto mb-1 flex flex-col">

        
        <div style="border:solid" class="sticky top-12 md:top-24 z-40 bg-BRG-white flex flex-col md:flex-row justify-between ">
            
            <div style="border:solid grey" class="h-30 md:h-28 flex-col justify-start items-start inline-flex" > <!--style="border:solid green"-->
                <div class="self-stretch brg-body-text">
                    <p>{{ artwork.beginyear }}—{{ artwork.endyear }}</p>
                </div>
                <div class="self-stretch brg-heading-text">
                    <p style="font-size: 24px; line-height: 130%;">{{ artwork.title }}</p>
                    <p style="font-size: 24px; line-height: 130%;">Second line of Artwork's Heading, even if it's a very long line</p>
                </div>
            </div> 
            
            <div style="border:solid grey" class="h-12 flex flex-row gap-4 items-center md:justify-end"> <!--style="border: solid greenyellow"-->
                <div style="border-bottom: solid;" class="h-5 brg-body-text">IMAGES</div>
                <div style="border-bottom: solid;" class="h-5 brg-body-text">TEXTS</div>
            </div>
            
        </div>
        
        
        <!--ARTWORK Heading section + navigation buttons-->
        <div style="border:solid green" class="h-12 md:h-24"></div>
        
        
        <!--CAROUSEL-->
        <div style="border:solid blue 3px; " class="w-full mx-auto p-4 flex-1 min-h-0" >
    
            <div style="border:colo blue">
                <UCarousel
                    v-slot="{ item, index }"
                    :items="items"
                    :ui="{ item: 'w-full' }"
        
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
                                margin: auto;"
                            >
                        </div>
                
                        <div style="border:solid green 2px" class="flex-none w-fit">
                            <p> {{ item.caption }} </p>
                        </div>
        
                    </div>
        
                </UCarousel>
            </div>
            
        </div>

        
    </div>


    



    <!--SCROLL section-->
    <div class="w-full mt-4 h-80" style="border:solid red">
        <p>{{ artwork.bodyita }}</p>
        
        <!--
            <br>
            <p>{{ actualPath }}</p>
    
            <br>
            <p>{{ myKey }}</p>
    
            <br>
            <p>{{ artwork }}</p>
    
            <br>
            <p>{{ artwork.beginyear }}</p>
            <p>{{ artwork.title }}</p>
    
            <div v-for="item of items" >
                <img :src="item.image">
                <p>{{ item.caption }}</p>
            </div>
        -->

    </div>

</template>
