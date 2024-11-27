<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/',
  });
};

</script>


<template>
    <div class="fixed mx-auto w-full z-50"> <!--style="border:solid black" -->
        <AppHeader />  
    </div>

    <main class="mx-auto max-w-7xl h-dvh flex flex-col"> <!-- style="border:solid, grey"  -->
        

        <div class="mx-auto w-full flex-1 max-w-7xl brg-txt-big px-4 flex items-center ">

            <div>
                <template v-if="error.statusCode === 404">
        
                    <p>Sorry, that page doesn't exist.</p>
        
                </template>
        
                <template v-else>
        
                    <p>It looks like something broke.</p>
                    <p>Sorry about that.</p>
                    
                </template>
        
                <p>Please, go back <a @click="handleError">Home.</a></p>
            </div>

        </div>
        
        
    </main> 
    
    <div class="mx-auto max-w-7xl">
        <AppFooter />
    </div>

</template>