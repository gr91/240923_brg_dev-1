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
        <div class="self-stretch text-[#141414] text-2xl font-normal font-['Neue Haas Unica W1G'] leading-[31.20px]">
            <p>{{ project.title }}</p>
        </div>
        <div class="self-stretch text-[#141414] text-sm font-normal font-['Neue Haas Unica W1G']">
          <p>{{ project.beginyear }}</p>
        </div>
        <div class="self-stretch text-[#141414] text-sm font-normal font-['Neue Haas Unica W1G']">
          <p>{{ project.category }}</p>
        </div>
    </div>

    <div style="padding:75% 0 0 0;position:relative;">
            <iframe {{ project.video }}>      
            </iframe>
        </div>

    <!--
        <div style="padding:75% 0 0 0;position:relative;">
            <iframe src="https://player.vimeo.com/video/1014856847?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="-2022 HE SHE ME  01_4">      
            </iframe>
        </div>
    -->
    
    <hr>
    <ContentDoc />
  </main>
</template>
