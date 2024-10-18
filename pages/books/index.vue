<script setup lang="ts">

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

const route = useRoute()      
const actualPath = route.path.replace(/\/$/, '');
//edit path to include en/it folder 
const myPath = "/books" + actualPath.replace("/books", "");

//pruce a unique key  
const myKey = myPath.replace('/books/', 'HelloBooks-');

//const route = useRoute()
const { data: books } = await useAsyncData(myKey, () => {
  return queryContent(myPath)
  .sort({year: 1})
  .find()
});


// const switchLocalePath = useSwitchLocalePath()
// const localePath = useLocalePath()



</script>

<template>


  <!---- SET NEW PATH FOR DATA QUERY ---->
  <!--
    <div class="mt-24" style="border:solid">
      
      <p><strong>actualPath</strong></p>
      <p>{{ actualPath }}</p>
      <br>
  
      <p><strong>actualPath</strong></p>
      <p>{{ myPath }}</p>
      <br>
      
      <p><strong>actualPath</strong></p>
      <p>{{ myKey }}</p>
      <br>
      
      <p><strong>Books</strong></p>
      <p>{{ books }}</p>
      <br>
  
    </div>
  -->



    <div class="mt-24">

      <div v-for="book in books" :key="book.slug" class="w-full max-w-[400px] mb-8" style="border:solid red">
          
        <img :src="book.cover" class="w-full mb-4">
            
        <div class="mb-4">
          <p>{{ book.year }}</p>
          <h1 style="font-size: 24px; line-height: 130%;">{{ book.title }}</h1>
        </div>
  
        <div class="mb-4">
          <MDC :value="book.description" />
        </div>
              
        <div class="mb-4" style="text-decoration: underline; text-transform: uppercase;">
          <div v-if="book.order == ('Mail')" >
            <a :href="`mailto:${book.address}`">Send e-mail</a>    
          </div>
          <div v-else-if="book.order == ('Website')">
            <a :href=book.address>Visit website</a>
          </div>
          <div v-else class="opacity-20">
            <p>Unavailable</p>
          </div>
        </div>

        <!--
          p>{{ book._path }}</p>
          <NuxtLink :to="localePath(String(book._path))"> See the book </NuxtLink>
        -->
  
      </div>

    </div>



  <div>
    <p>Current language is set to <strong>{{ locale }}</strong></p>
  </div>







  <!--
    <p><strong>books</strong>/index.vue page</p>
  
    <div v-for="book of books" :key="book.slug">
  
      <div class="h-[52px] flex-col justify-start items-start inline-flex" >
        <div class="self-stretch text-[#141414] text-sm font-normal font-['Neue Haas Unica W1G']">
          <p>{{ book.date }}</p>
        </div>
        <div class="self-stretch text-[#141414] text-2xl font-normal font-['Neue Haas Unica W1G'] leading-[31.20px]">
          <p>{{ book.title }}</p>
        </div>
       </div>    
            
    </div>
  -->

</template>
