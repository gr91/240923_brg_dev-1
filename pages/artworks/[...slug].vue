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


    <!--ARTWORK Heading section + navigation buttons-->
    <div class="h-12 md:h-24"></div>


    <div style="border:solid" class="sticky top-12 md:top-24 bg-BRG-white flex flex-col md:flex-row justify-between ">

        <div  class="h-30 flex-col justify-start items-start inline-flex" > <!--style="border:solid green"-->
            <div class="self-stretch brg-body-text">
                <p>{{ artwork.beginyear }}—{{ artwork.endyear }}</p>
            </div>
            <div class="self-stretch brg-heading-text">
                <p style="font-size: 24px; line-height: 130%;">Il tempo l'architettura l'uomo</p>
                <p style="font-size: 24px; line-height: 130%;">Ricostruzione del Padiglione d'Arte contemporanea di Milano</p>
            </div>
        </div> 
    
        <div style="border:solid grey" class="h-12 flex flex-row gap-4 items-center md:justify-end"> <!--style="border: solid greenyellow"-->
            <div style="border-bottom: solid;" class="h-5 brg-body-text">IMAGES</div>
            <div style="border-bottom: solid;" class="h-5 brg-body-text">TEXTS</div>
        </div>

    </div>



    <div class="w-full mt-24" style="border:solid red">
        <p>Template page:</p>
        
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
    </div>

</template>
