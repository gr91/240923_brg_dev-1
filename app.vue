<template>

  <!--MAIN-->
  <!--Set max width for the whole app-->
  <main class="mx-auto max-w-7xl px-4"> <!-- style="border:solid, red" -->
    
      <!--APP HEADER CONTAINER-->
      <!--Fix AppHeader at the top of the page and make it respect position and width -->
      <div  class="fixed mx-auto w-full max-w-7xl z-20"> <!--style="border:solid black"-->
        <AppHeader />  
        <!--
        -->
      </div>

      <!--PAGES-->
      <div class="mx-auto w-full max-w-7xl">
        <NuxtPage />
      </div>
    
  </main>
</template>
