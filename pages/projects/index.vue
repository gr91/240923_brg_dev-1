<script setup lang="ts">
//const route = useRoute()
const { data: projects } = await useAsyncData('projects', () => {
  return queryContent('/projects')
  .sort({beginyear: 1, endyear: 1})
  .find()
})


</script>

<template>
    
    <p><strong>projects</strong>/index.vue page</p>
  
    <div v-for="project of projects" :key="project.slug">
        <NuxtLink :to="project._path">
            <div >
                <div class="brg-body-text">
                    <p>{{ project.beginyear }}—{{ project.endyear }}</p>
                </div>
                <div class="brg-heading-text">
                    <p>{{ project.title }}</p>
                </div>
            </div>         
        </NuxtLink>
    </div>

</template>
