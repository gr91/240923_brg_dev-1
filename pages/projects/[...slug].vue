<script setup>
const route = useRoute()
      
const actualPath = route.path.replace(/\/$/, '');
      
const { data: project } = await useAsyncData(`hello`, () =>
    queryContent(actualPath).findOne()
);
</script>


<template>
  <main class="mx-auto max-w-7xl space-y-6">
    <AppHeader />
    
    <div class="h-[52px] flex-col justify-start items-start inline-flex" >
        <div class="self-stretch text-[#141414] text-sm font-normal font-['Neue Haas Unica W1G']">
          <p>{{ project.category }}</p>
        </div>
        <div class="self-stretch text-[#141414] text-sm font-normal font-['Neue Haas Unica W1G']">
          <p>{{ project.title }}</p>
        </div>
        <div class="self-stretch text-[#141414] text-2xl font-normal font-['Neue Haas Unica W1G'] leading-[31.20px]">
            <p>{{ project.beginyear }}</p>
        </div>
    </div>
    
    <hr>
    <ContentDoc />
  </main>
</template>
