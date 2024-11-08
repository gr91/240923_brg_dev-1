<script setup>
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>

    <div class="w-full min-h-12 px-4 flex items-center">
        <div class="w-full min-h-12 flex flex-col items-center justify-center md:flex-row md:justify-start md:gap-4" style="border-top:solid lightgray;">
            
            <div class="h-min w-full md:max-w-40 brg-txt-caption">
                <p>© Bruna Ginammi, {{ currentYear }}</p>
            </div>

            <!--
                <div class="h-min brg-txt-caption ">
                    <p>Design and development</p>
                    <a href="mailto: giusepperomagno@proton.me">Giuseppe Romagno</a>
                </div>
            -->

        </div>
    </div>

</template>