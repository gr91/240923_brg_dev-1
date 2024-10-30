<script setup>

//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();




//Biography
const { data: extractBiography } = await useAsyncData('biography', () => {
    return queryContent('/newbio')
    .where({_path: '/newbio/biography'})
    .find()
});
const biography = extractBiography.value[0];

//Awards
const { data: extractAwards } = await useAsyncData('awards', () => {
    return queryContent('/newbio')
    .where({_path: '/newbio/awards'})
    .find()
});
const awards = extractAwards.value[0].it.award;

//------Add query------//




// set scrollTo function to ensure scroll to section not affect browser history
const scrollTo = (hash) => {
  const element = document.querySelector(hash)
  if (element) {

    // Perform the smooth scroll
    element.scrollIntoView({ behavior: 'smooth' });

    // After scrolling, replace the state again to maintain the current URL
    setTimeout(() => {
      history.replaceState(null, null, hash);
    }, 500);  // Add a slight delay to let the scroll complete smoothly
  }
}


</script>

<template>

    <!--BIO header-->
    <div style="border:solid red" class="h-32 md:h-24"></div>

    <!--BIO Navigation-->
    <!--<div style="border: solid greenyellow" class="h-12 flex flex-row gap-4 items-center md:justify-end overflow-x-scroll">-->
    <div style="border:solid" class="sticky top-12 md:top-24 h-12 px-4 bg-BRG-white flex flex-row gap-4 items-center lg:justify-end overflow-x-auto no-scrollbar">
        
        <a href="#anchorimg" @click.prevent="scrollTo('#anchorimg')">
            <div class="h-4 brg-txt-button brg-cta">Biography</div>
        </a>
        <a href="#anchortxt" @click.prevent="scrollTo('#anchortxt')">
            <div class="h-4 brg-txt-button brg-cta">Awards</div>
        </a>
        <a href="#anchortxt" @click.prevent="scrollTo('#anchortxt')">
            <div class="h-4 brg-txt-button brg-cta">Exhibition</div>
        </a>
        <a href="#anchortxt" @click.prevent="scrollTo('#anchortxt')">
            <div class="h-4 brg-txt-button brg-cta">Collections</div>
        </a>
        <a href="#anchortxt" @click.prevent="scrollTo('#anchortxt')">
            <div class="h-4 brg-txt-button brg-cta">Pubblication</div>
        </a>
        <a href="#anchortxt" @click.prevent="scrollTo('#anchortxt')">
            <div class="h-4 brg-txt-button brg-cta">Pubblication</div>
        </a>
        <a href="#anchortxt" @click.prevent="scrollTo('#anchortxt')">
            <div class="h-4 brg-txt-button brg-cta">Pubblication</div>
        </a>
        
    </div>



    <div class="px-4">

        <!--Biography-->
        <div class="w-full md:max-w-xl mb-8 md:mb-12" style="border:solid grey 2px" id="biography">
            <img :src="biography.it.image" class="w-40 md:w-60 mb-2">
            <h3 class="brg-txt-heading mb-2">{{ $t('biography') }}</h3>
            
            <div v-if="locale == String('it')">
                <MDC :value="biography.it.text"/>
            </div>
            <div v-else>
                <MDC :value="biography.en.text"/>
            </div>
        </div>
        
    
        <!--Awards List-->
        <div class="w-full md:max-w-xl mb-8 md:mb-12" style="border:solid grey 2px">
            <h3 class="brg-txt-heading mb-2">{{ $t('awards') }}</h3>
            <div v-for="award in awards" class="w-full flex flex-row brg-txt-body" style="border:solid lightgray">
                <div class="w-16 flex-0" style="border:solid red">
                    <p>{{ award.year }}</p>
                </div>
                <div class="flex-1" style="border:solid blue">
                    <p>{{ award.text }}</p>
                </div>
            </div>
        </div>
        
        
        <!--Public Collections List-->
        <div class="w-full md:max-w-xl mb-8 md:mb-12" style="border:solid grey 2px">
            <h3 class="brg-txt-heading mb-2">{{ $t('publiccollections') }}</h3>
            <p>List</p>
        </div>
        
        
        <!--Solo Exhibition List-->
        <div class="w-full md:max-w-xl mb-8 md:mb-12" style="border:solid grey 2px">
            <h3 class="brg-txt-heading mb-2">{{ $t('soloexhibitions') }}</h3>
            <p>List</p>
        </div>
        
        
        <!--Group Exhibition List-->
        <div class="w-full md:max-w-xl mb-8 md:mb-12" style="border:solid grey 2px">
            <h3 class="brg-txt-heading mb-2">{{ $t('groupexhibitions') }}</h3>
            <p>List</p>
        </div>
        
        
        <!--Pubblications List-->
        <div class="w-full md:max-w-xl mb-8 md:mb-12" style="border:solid grey 2px">
            <h3 class="brg-txt-heading mb-2">{{ $t('pubblications') }}</h3>
            <p>List</p>
        </div>
        
    </div>


    
    
    <!--
        <div class="mt-48"></div>

        <p>----------------------------------------</p>
        <div class="mt-48"></div>
        <p>VARIABLES PRINT TEST</p>
        <p><strong>locale: </strong>{{ locale }}</p>
        <p><strong>contentPath: </strong>{{ contentPath }}</p>
        <p><strong>myKey: </strong>{{ myKey }}</p>
        
        <p>----------------------------------------</p>
        <br>
        <br>
        
        <p><strong>newbiodata</strong></p>
        <p>{{ newbiodata }}</p>
        <br>
        
        <p>----------------------------------------</p>
        <p><strong>biography</strong></p>
        <p>{{ biography }}</p>
        <br>
        
        <p><strong>biography / content</strong></p>
        <MDC :value=biography.it.text />
        <br>
        
        <p>----------------------------------------</p>
        <p><strong>extractAwards</strong></p>
        <p>{{ extractAwards }}</p>
        <br>
        
        <p><strong>awards</strong></p>
        <p>{{ awards }}</p>
        <br>
    -->



</template>
