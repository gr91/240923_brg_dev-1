<script setup>

//------------i18n configuration (from nuxtjs/i18n docs)------------

//const localePath = useLocalePath()
//const { locale, setLocale } = useI18n()

        //Redefine [...slug] path to match content dir architecture
        //  content                             pages
        //  ---books                            ---books
        //  ------it | en                       ------ADD HERE /it | /en TO THE PATH  
        //  ------------[slug].md               ---------[...slug].vue
defineI18nRoute({
    paths: {
      it: '/books/it/[...slug]',
      en: '/books/en/[...slug]'
    }
  })



const route = useRoute()      
//edit actualPath to match the correct content path
const actualPath = route.path.replace(/\/$/, '').substring(3);
//pruce a unique key  
const myKey = actualPath.replace("/books/", "").replace("/","-");

const { data: book } = await useAsyncData(myKey, () =>
    queryContent(actualPath).findOne()
);

</script>



<template>

    
    <div class="mt-80">
        <p><strong>Actual Path</strong></p>
        <p>{{ actualPath }}</p>
        
        <br>
        <p><strong>myKey</strong></p>
        <p>{{ myKey }}</p>
        
        <br>
        <p><strong>Book</strong></p>
        <p>{{ book }}</p>

        <br>
        <p><strong>Book title</strong></p>
        <p>{{ book.title }}</p>

        <br>
        <p><strong>Book true description</strong></p>
        <p>{{ book.truedes }}</p>

        <br>
        <p><strong>Book duplicate description</strong></p>
        <p>{{ book.dupldes }}</p>

    </div>


    <!--
        <div class="h-40">
        </div>
    
        <div style="border:solid" class="mb-4">
            <p><strong>book array</strong></p>
            <p>{{ book }}</p> <br>
            <p>{{ book.title }}</p> <br>
            <p>{{ book.year }}</p> <br>
            <MDC :value="book.truedes"/> <br>
            <MDC :value="book.dupldes"/> <br>
        </div>
    
    
        <div style="border:solid" class="mb-4">
            
            <p><strong>Locale</strong></p>
            <p>{{ locale }}</p> <br>
    
            <p><strong>LocalePath</strong></p>
            <p>{{ localePath }}</p> <br>
            
            <p><strong>Route</strong></p>
            <p>{{ route }}</p> <br>
            
            <p><strong>actualPath</strong></p>
            <p>{{ actualPath }}</p> <br>
            
            <p><strong>myPath</strong></p>
            <p style="color: red">{{ myPath }}</p> <br>
            
            <p>{{ myPath }}</p>
            <p>{{ myKey }}</p>
    
        </div>
    -->


</template>