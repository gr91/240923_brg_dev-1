<script setup lang="ts">
//const route = useRoute()
const { data: books } = await useAsyncData('books', () => {
  return queryContent('/books').find()
})
</script>

<template>

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

</template>
