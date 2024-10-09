<template>

  <!--MAIN-->
  <!--Set max width for the whole app-->
  <main style="border:solid, red" class="mx-auto max-w-7xl">
    
      <!--APP HEADER CONTAINER-->
      <!--Fix AppHeader at the top of the page and make it respect position and width -->
      <div style="border:solid black" class="fixed mx-auto w-full max-w-7xl">
        <AppHeader />  
        <!--
        -->
      </div>

      <!--PAGES-->
      <NuxtPage />
    
  </main>
</template>
