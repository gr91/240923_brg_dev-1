<script setup lang="ts">
const route = useRoute()
</script>

<template>

    <!--FIT TO SCREEN section-->
    <div class="w-full h-dvh mx-auto px-4 pt-12  flex flex-col">

        <div class="flex-1 flex flex-col justify-center brg-txt-big" style="line-height: 140%;">
            <div class="mb-4">
                <p>Bruna Ginammi</p>
                <p>{{ $t('photographer') }}</p>
            </div>
            
            <div class="mb-4">
                <p>11, via Privata Paolo Cezanne</p>
                <p>20143 Milano, Italy</p>
            </div>
            
            <div class="mb-12">
                <p>+39 351 830 33 52</p>
                <a href="mailto:brunaginammi64@gmail.com">brunaginammi64@gmail.com</a>
                <p><a href="https://www.facebook.com/bruna.ginammi" target="_blank" style="text-decoration: none;">Facebook</a> | <a href="https://www.instagram.com/brunaginammi_photographer/" target="_blank" style="text-decoration: none;">Instagram</a></p>
            </div>

            <div class="mb-4">
                <p>Galleria Mazzoli</p>
            </div>
            
            <div class="mb-4">
                <p>via Nazario Sauro, 62</p>
                <p>41121 Modena MO, Italy</p>
                <a href="https://www.galleriamazzoli.com" target="_blank">www.galleriamazzoli.com</a>
            </div>
            
        </div>

        <div class="flex-0 py-4 brg-txt-caption flex flex-col gap-4" >
            <div>
                <p>{{ $t('designanddev')}}</p>
                <p><a href="https://www.instagram.com/g_romagno/" target="_blank">Giuseppe Romagno</a></p>
            </div>
        </div>

    </div>

</template>