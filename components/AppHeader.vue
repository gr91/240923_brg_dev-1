<script setup>

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

//------Slideover
const isOpen = ref(false)

</script>


<template>
    

    
    <!-- DESKTOP APPHEADER-->
    <span class="hidden md:block max-w-7xl mx-auto" > <!--style="border:solid blue"-->
        <div class=" w-full h-24 mx-auto p-4 bg-BRG-white items-start justify-between inline-flex">
            
            <div class="justify-center items-center gap-2.5 flex brg-txt-big">
                <NuxtLink :to="localePath('/')">Bruna Ginammi</NuxtLink>
            </div>
            
            <div class="justify-end items-center gap-8 flex brg-txt-big">
                <NuxtLink :to="localePath('/artworks')">{{ $t('artworks') }}</NuxtLink>
                <NuxtLink :to="localePath('/books')">{{ $t('books') }}</NuxtLink>
                <NuxtLink :to="localePath('/bio')">{{ $t('bio') }}</NuxtLink>
                <NuxtLink :to="localePath('/custom-pages/contacts')">{{ $t('contacts') }}</NuxtLink>
                <button v-if="locale == ('it')" @click="setLocale('en')">ENG</button>
                <button  v-else="locale == ('en')" @click="setLocale('it')">ITA</button>  
            </div>
            
        </div>
    </span>
    
    
    
    <!-- MOBILE APPHEADER-->
    <span class="block md:hidden mx-auto"  > <!--style="border:solid red"-->
        <div class="w-full h-12 mx-auto px-4 bg-BRG-white justify-between inline-flex items-center brg-txt-big">
            <div class="justify-center items-center gap-2.5 flex">
                <!--
                    <div><NuxtLink to="/">Bruna Ginammi</NuxtLink></div>
                    -->
                    <NuxtLink :to="localePath('/')">Bruna Ginammi</NuxtLink>
                </div>
                <div class="justify-end items-center gap-8 flex">
                    <div class="justify-center items-center gap-2.5 flex">
                        <a class="brg-big-text" @click="isOpen = true">Menu</a>
                    </div>
                </div>
            </div>
        </span>
        
        <!-- MOBILE SLIDE OVER-->
        <USlideover
        v-model="isOpen"
        :overlay="false"
        :ui="{
            background:'bg-BRG-white'
        }"
        :slide="top"
        
        class="bg-BRG-white"
        >
        <div class=" h-full px-4 flex flex-col"> <!--style="border:solid "-->
            
            <div class="h-12 flex justify-between items-center"> <!--style="border:solid blue " -->
                <NuxtLink @click="isOpen = false" :to="localePath('/')">Bruna Ginammi</NuxtLink>
                <p @click="isOpen = false">{{ $t('close') }}</p>
            </div>
            
            <div class="flex-1 gap-4 flex flex-col justify-center brg-txt-heading">  <!--style="border: solid red 1px;" -->             
                <NuxtLink @click="isOpen = false" :to="localePath('/artworks')">{{ $t('artworks') }}</NuxtLink>
                <NuxtLink @click="isOpen = false" :to="localePath('/books')">{{ $t('books') }}</NuxtLink>
                <NuxtLink @click="isOpen = false" :to="localePath('/bio')">{{ $t('bio') }}</NuxtLink>
                <NuxtLink @click="isOpen = false" :to="localePath('/custom-pages/contacts')">{{ $t('contacts') }}</NuxtLink>
            </div>
            <div class="h-12 flex justify-start">
                <button v-if="locale == ('it')" @click="setLocale('en'); isOpen = false">ENG</button>
                <button  v-else="locale == ('en')" @click="setLocale('it'); isOpen = false">ITA</button>  
            </div>

      </div>
    </USlideover>
    
</template>