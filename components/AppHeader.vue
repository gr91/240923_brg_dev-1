<script setup>

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

//------Slideover
const modalMenuIsOpen = ref(false)

</script>


<template>
    

    
    <!-- DESKTOP APPHEADER-->
    <span  class="hidden md:block max-w-7xl mx-auto" > <!--style="border:solid blue"-->
        <div class=" w-full h-24 mx-auto p-4 bg-BRG-white items-start justify-between inline-flex">
            
            <div class="justify-center items-center gap-2.5 flex brg-txt-big">
                <NuxtLink :to="localePath('/')" class="hover:opacity-50">Bruna Ginammi</NuxtLink>
            </div>
            
            <div class="justify-end items-center gap-8 flex brg-txt-big">
                <NuxtLink :to="localePath('/artworks')" class="hover:opacity-50">{{ $t('artworks') }}</NuxtLink>
                <NuxtLink :to="localePath('/books')" class="hover:opacity-50">{{ $t('books') }}</NuxtLink>
                <NuxtLink :to="localePath('/bio')" class="hover:opacity-50">{{ $t('bio') }}</NuxtLink>
                <NuxtLink :to="localePath('/static-pages/contacts')" class="hover:opacity-50">{{ $t('contacts') }}</NuxtLink>
                <button v-if="locale == ('it')" @click="setLocale('en')" class="hover:opacity-50">ENG</button>
                <button  v-else="locale == ('en')" @click="setLocale('it')" class="hover:opacity-50">ITA</button>  
            </div>
            
        </div>
    </span>
    
    
    
    <!-- MOBILE APPHEADER-->
    <span  class="block md:hidden mx-auto"  > <!--style="border:solid red"-->
        <div class="w-full h-12 mx-auto px-4 bg-BRG-white justify-between inline-flex items-center brg-txt-big">
            <div class="justify-center items-center gap-2.5 flex">
                <!--
                    <div><NuxtLink to="/">Bruna Ginammi</NuxtLink></div>
                    -->
                    <NuxtLink :to="localePath('/')">Bruna Ginammi</NuxtLink>
                </div>
                <div class="justify-end items-center gap-8 flex">
                    <div class="justify-center items-center gap-2.5 flex">
                        <a @click="modalMenuIsOpen = true">Menu</a>
                    </div>
                </div>
            </div>
        </span>
        
        <!-- MOBILE SLIDE OVER-->
        <USlideover
        v-model="modalMenuIsOpen"
            :ui="{
                background:'bg-BRG-white',
                overlay:{
                    background: 'bg-BRG-white',
                    transition:{
                        enter: 'ease-in-out duration-700',
                        enterFrom: 'opacity-0',
                        enterTo: 'opacity-100',
                        leave: 'ease-in-out duration-700',
                        leaveFrom: 'opacity-100',
                        leaveTo: 'opacity-0'
                    }
                },
                transition: {
                    enter:' transform transition ease-in-out duration-700',
                    leave:' transform transition ease-in-out duration-700',
                }
            }"
        
        
        >
        <div class=" h-full pl-2 pr-4 flex flex-col"> <!--style="border:solid "-->
            
            <div class="h-12 flex justify-between items-center"> <!--style="border:solid blue " -->
                <UButton
                    variant="ghost"
                    @click="modalMenuIsOpen = false" :to="localePath('/')"
                >
                    <p class="brg-txt-big">Bruna Ginammi</p>
                </UButton>

                <p @click="modalMenuIsOpen = false" class="brg-txt-big">{{ $t('close') }}</p>
            </div>
            
            <div class="flex-1 gap-2 flex flex-col justify-center brg-txt-heading">  <!--style="border: solid red 1px;" -->             
                <UButton variant="ghost"
                    @click="modalMenuIsOpen = false" :to="localePath('/artworks')">
                    <p class="brg-txt-heading">{{ $t('artworks') }}</p>
                </UButton>
                <UButton variant="ghost"
                    @click="modalMenuIsOpen = false" :to="localePath('/books')">
                    <p class="brg-txt-heading">{{ $t('books') }}</p>
                </UButton>
                <UButton variant="ghost"
                    @click="modalMenuIsOpen = false" :to="localePath('/bio')">
                    <p class="brg-txt-heading">{{ $t('bio') }}</p>
                </UButton>
                <UButton variant="ghost"
                    @click="modalMenuIsOpen = false" :to="localePath('/static-pages/contacts')">
                    <p class="brg-txt-heading">{{ $t('contacts') }}</p>
                </UButton>

            </div>
            <div class="h-12 pl-2 flex items-center justify-start" >
                <p v-if="locale == ('it')" @click="setLocale('en'); modalMenuIsOpen = false">ENG</p>
                <p v-else="locale == ('en')" @click="setLocale('it'); modalMenuIsOpen = false">ITA</p>  
            </div>

      </div>
    </USlideover>
    
</template>