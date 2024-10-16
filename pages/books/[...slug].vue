<script setup>

//------i18n configuration --- from nuxtjs/i18n docs
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()


const route = useRoute()      
const actualPath = route.path.replace(/\/$/, '');
//edit path to include en/it folder 
const myPath = "/books" + actualPath.replace("/books", "");

const myKey = myPath.replace("/books/", "").replace("/","-");

const { data: book } = await useAsyncData(myKey, () =>
    queryContent(myPath).findOne()
);

</script>



<template>

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
        
        <p><strong>Route</strong></p>
        <p>{{ route }}</p> <br>
        
        <p><strong>actualPath</strong></p>
        <p>{{ actualPath }}</p> <br>
        
        <p><strong>myPath</strong></p>
        <p style="color: red">{{ myPath }}</p> <br>
        
        <p>{{ myPath }}</p>
        <p>{{ myKey }}</p>

    </div>


</template>