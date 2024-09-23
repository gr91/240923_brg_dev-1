<template>
  <div>
    <NuxtRouteAnnouncer />
    <!--
    <p>Hello Nuxt!</p>
    <ol>
      <li>Item1 </li>
    </ol>
    -->
  </div>
  <nav>
    <ul>
      <li><NuxtLink to="/custom-pages/about">About</NuxtLink></li>
      <li><NuxtLink to="/custom-pages/contacts">Contacts</NuxtLink></li>
    </ul>
  </nav>
  <NuxtPage />
</template>
