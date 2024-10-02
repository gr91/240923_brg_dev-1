<script setup lang="ts">
//const route = useRoute()
const { data: projects } = await useAsyncData('projects', () => {
  return queryContent('/projects')
  .sort({beginyear: 1, endyear: 1})
  .find()
})


</script>

<template>

    <main class="mx-auto max-w-7xl space-y-6">
        <AppHeader />
        <p><strong>projects</strong>/index.vue page</p>
      
        <div v-for="project of projects" :key="project.slug">
            <NuxtLink :to="project._path">
                <div class="h-[52px] flex-col justify-start items-start inline-flex" >
                    <div class="self-stretch text-[#141414] text-sm font-normal font-['Neue Haas Unica W1G']">
                    <p>{{ project.beginyear }}—{{ project.endyear }}</p>
                    </div>
                    <div class="self-stretch text-[#141414] text-2xl font-normal font-['Neue Haas Unica W1G'] leading-[31.20px]">
                    <p>{{ project.title }}</p>
                    </div>
                </div>         
            </NuxtLink>
        </div>

    </main>

</template>
  