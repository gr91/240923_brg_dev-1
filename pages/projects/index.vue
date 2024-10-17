<script>



</script>



<template>
    
    <div>
        <p>artworks/index</p>
    </div>


    <!---- SET NEW PATH FOR DATA QUERY ---->
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
        
        <p><strong>Projects</strong></p>
        <p>{{ projects }}</p>
        <br>

    </div>

    <div v-for="project in projects" :key="project.slug" class="w-full my-4" style="border:solid grey">

        <p></p>

    </div>


</template>