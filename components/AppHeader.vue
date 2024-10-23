<script setup>

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

//------Slideover
const isOpen = ref(false)

</script>


<template>
    

    <!-- DESKTOP APPHEADER-->
    <span class="hidden md:block max-w-7xl mx-auto" style="border:solid blue">
        <div class=" w-full h-24 mx-auto p-4 bg-BRG-white items-start justify-between inline-flex">
            
            <div class="justify-center items-center gap-2.5 flex brg-txt-big">
                <NuxtLink :to="localePath('/')">Bruna Ginammi</NuxtLink>
            </div>
            
            <div class="justify-end items-center gap-8 flex brg-txt-big">
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
        <div class="w-full h-12 mx-auto px-4 bg-BRG-white justify-between inline-flex items-center brg-txt-big">
            <div class="justify-center items-center gap-2.5 flex">
                <div><NuxtLink to="/">Bruna Ginammi</NuxtLink></div>
            </div>
            <div class="justify-end items-center gap-8 flex">
                <div class="justify-center items-center gap-2.5 flex">
                    <a class="brg-big-text" @click="isOpen = true">Menu</a>
                </div>
            </div>
        </div>
    </span>
    
    <USlideover
    v-model="isOpen"
    :ui="{
        background:'bg-BRG-white'
    }"
        :slide="top"
        
        class="bg-BRG-white"
        >
        <div style="border:solid " class=" h-full px-4 flex flex-col">
            
            <div style="border:solid blue " class="h-12 flex justify-end items-center">
                <p @click="isOpen = false">Close</p>
            </div>
            
            <div style="border: solid red 1px;" class="flex-1 gap-4 flex flex-col justify-center brg-txt-heading">                    
                <NuxtLink @click="isOpen = false" :to="localePath('/artworks')">{{ $t('artworks') }}</NuxtLink>
                <NuxtLink @click="isOpen = false" :to="localePath('/books')">{{ $t('books') }}</NuxtLink>
                <NuxtLink @click="isOpen = false" :to="localePath('/custom-pages/bio')">{{ $t('bio') }}</NuxtLink>
                <NuxtLink @click="isOpen = false" :to="localePath('/custom-pages/contacts')">{{ $t('contacts') }}</NuxtLink>
            </div>
            <div class="h-12 flex justify-start">
                <button v-if="locale == ('it')" @click="setLocale('en')">ENG</button>
                <button  v-else="locale == ('en')" @click="setLocale('it')">ITA</button>  
            </div>

            <!--
                <UButton
                size="sm"
                icon="i-heroicons-x-mark-20-solid"
                class="flex sm:hidden absolute end-5 top-5 z-10"
                square
                padded
                @click="isOpen = false"
                />
            -->
      </div>
    </USlideover>
    
</template>