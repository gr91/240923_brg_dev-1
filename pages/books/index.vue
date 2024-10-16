<script setup lang="ts">
//const route = useRoute()
const { data: books } = await useAsyncData('books', () => {
  return queryContent('/books')
  .sort({year: -1})
  .find()
});

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

// const switchLocalePath = useSwitchLocalePath()
// const localePath = useLocalePath()



</script>

<template>


  <!---- SET NEW PATH FOR DATA QUERY ---->
  <div class="mt-24" style="border:solid">
    <p>{{ books }}</p>

  </div>

  <div v-for="book in books" :key="book.slug" class="w-full my-4" style="border:solid grey">
  
    <div>
      <p>{{ book.year }}</p>
      <h3>{{ book.title }}</h3>

      <br>
      <div style="color: red;">
        <MDC :value="book.truedes" />
      </div>

      <br>
      <div style="color: blue">
        <MDC :value="book.dupldes" />
      </div>
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
