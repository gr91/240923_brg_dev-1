<script setup>

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

</script>


<template>
    

    <!-- DESKTOP APPHEADER-->
    <span class="hidden md:block max-w-7xl mx-auto" style="border:solid blue">
        <div class=" w-full h-24 mx-auto p-4 bg-BRG-white items-start justify-between inline-flex">
            
            <div class="justify-center items-center gap-2.5 flex">
                <NuxtLink :to="localePath('/')">Bruna Ginammi</NuxtLink>
            </div>
            
            <div class="justify-end items-center gap-8 flex">
                <NuxtLink :to="localePath('/artworks')">{{ $t('artworks') }}</NuxtLink>
                <NuxtLink :to="localePath('/books')">{{ $t('books') }}</NuxtLink>
                <NuxtLink :to="localePath('/custom-pages/bio')">{{ $t('bio') }}</NuxtLink>
                <NuxtLink :to="localePath('/custom-pages/contacts')">{{ $t('contacts') }}</NuxtLink>
                <button v-if="locale == ('it')" @click="setLocale('en')">ENG</button>
                <button  v-else="locale == ('en')" @click="setLocale('it')">ITA</button>  
            </div>
      
        </div>
    </span>
    
    
    <!-- MOBILE APPHEADER-->
    <span class="block md:hidden mx-auto" style="border:solid red" >
        <div class="w-full h-12 mx-auto px-4 bg-BRG-white justify-between inline-flex items-center">
            <div class="justify-center items-center gap-2.5 flex">
                <div class="brg-big-text"><NuxtLink to="/">Bruna Ginammi</NuxtLink></div>
            </div>
            <div class="justify-end items-center gap-8 flex">
                <div class="justify-center items-center gap-2.5 flex">
                    <div class="brg-big-text"><p>Menu</p></div>
                </div>
            </div>
        </div>
    </span>

    
</template>