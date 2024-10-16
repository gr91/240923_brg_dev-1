<script setup lang="ts">
//const route = useRoute()
const { data: books } = await useAsyncData('books', () => {
  return queryContent('/books')
  .sort({year: -1})
  .find()
})
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
    <div>
      <button @click="setLocale('en')"
        class="w-16 p-2 mx-2" style="border:solid">ENG</button>

      <button @click="setLocale('fr')"
        class="w-16 p-2 mx-2" style="border:solid">FRA</button>

      <p>{{ $t('welcome') }}</p>
    </div>
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
