<template>
    
    <span class="hidden md:block max-w-7xl mx-auto" style="border:solid blue">
        <div class=" w-full h-24 mx-auto p-4 bg-BRG-white items-start justify-between inline-flex">
            <div class="justify-center items-center gap-2.5 flex">
                <div class="brg-big-text"><NuxtLink to="/">Bruna Ginammi</NuxtLink></div>
            </div>
            <div class="justify-end items-center gap-8 flex">
                <div class="justify-center items-center gap-2.5 flex">
                    <div class="brg-big-text"><NuxtLink to="/artworks">Artworks</NuxtLink></div>
                </div>
                <div class="justify-center items-center gap-2.5 flex">
                    <div class="brg-big-text"><NuxtLink to="/books">Books</NuxtLink></div>
                </div>
                <div class="justify-center items-center gap-2.5 flex">
                    <div class="brg-big-text"><NuxtLink to="/custom-pages/bio">Bio</NuxtLink></div>
                </div>
                <div class="justify-center items-center gap-2.5 flex">
                    <div class="brg-big-text"><NuxtLink to="/custom-pages/contacts">Contacts</NuxtLink></div>
                </div>
                <!--
                    <div class="justify-center items-center gap-2.5 flex">
                        <div class="brg-big-text">ITA</div>
                    </div>
                -->
            </div>
        </div>




    </span>

    <span class="block md:hidden mx-auto" style="border:solid red" >
        <div class="w-full h-12 mx-auto px-4 bg-BRG-white justify-between inline-flex items-center">
            <div class="justify-center items-center gap-2.5 flex">
                <div class="brg-big-text"><NuxtLink to="/">Bruna Ginammi</NuxtLink></div>
            </div>
            <div class="justify-end items-center gap-8 flex">
                <div class="justify-center items-center gap-2.5 flex">
                    <div class="brg-big-text"><p>Menu</p></div>
                </div>
            </div>
        </div>
    </span>
</template>