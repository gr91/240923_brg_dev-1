<script setup>

//------i18n configuration (from nuxtjs/i18n docs)------
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

const mykey = `newBio-${locale.value}`;

//------PERFORM QUARIES------//

//Entire bio --- FOR TEST ONSLY
const { data: bio } = await useAsyncData(mykey, () => {
        return queryContent('/bio')
        .find()
    });

//Split bio collections
const biography = bio.value.find(item => item._path === '/bio/biography');
const awards = bio.value.find(item => item._path === '/bio/awards').it.award;
const publicColls = bio.value.find(item => item._path === '/bio/publiccoll').it.collection;
const soloExhibs = bio.value.find(item => item._path ==='/bio/soloexhib').it.exhib;
const groupExhibs = bio.value.find(item => item._path ==='/bio/groupexhib').it.exhib;
const pubblications = bio.value.find(item => item._path ==='/bio/pubblications').it.pubblication;
const magazines = bio.value.find(item => item._path ==='/bio/magazines').it.magazine;


// set scrollTo function to ensure scroll to section not affect browser history
const scrollTo = (hash) => {
  const element = document.querySelector(hash)
  if (element) {

    // Perform the smooth scroll
    element.scrollIntoView({ behavior: 'smooth' });

    // After scrolling, replace the state again to maintain the current URL
    setTimeout(() => {
      history.replaceState(null, null, hash);
    }, 500);  // Add a slight delay to let the scroll complete smoothly
  }
}



</script>

<template>

    <!--BIO header-->
    <div class="h-32 md:h-24"></div> <!--style="border:solid red"-->

    <!--BIO Navigation-->
    <div class="sticky top-12 md:top-24 h-12 px-4 bg-BRG-white flex flex-row gap-4 items-center overflow-x-auto no-scrollbar"> <!--style="border:solid" -->
        
        <a href="#biography" @click.prevent="scrollTo('#biography')" class="flex-none">
            <div class="h-4 brg-txt-button brg-cta">{{ $t('biography') }}</div>
        </a>
        <a href="#awards" @click.prevent="scrollTo('#awards')" class="flex-none">
            <div class="h-4 brg-txt-button brg-cta">{{ $t('awards') }}</div>
        </a>
        <a href="#publiccollections" @click.prevent="scrollTo('#publiccollections')" class="flex-none">
            <div class="h-4 brg-txt-button brg-cta">{{ $t('publiccollections') }}</div>
        </a>
        <a href="#soloexhibitions" @click.prevent="scrollTo('#soloexhibitions')" class="flex-none">
            <div class="h-4 brg-txt-button brg-cta">{{ $t('soloexhibitions') }}</div>
        </a>
        <a href="#groupexhibitions" @click.prevent="scrollTo('#groupexhibitions')" class="flex-none">
            <div class="h-4 brg-txt-button brg-cta">{{ $t('groupexhibitions') }}</div>
        </a>
        <a href="#pubblications" @click.prevent="scrollTo('#pubblications')" class="flex-none">
            <div class="h-4 brg-txt-button brg-cta">{{ $t('pubblications') }}</div>
        </a>
        <a href="#magazines" @click.prevent="scrollTo('#magazines')" class="flex-none">
            <div class="h-4 brg-txt-button brg-cta">{{ $t('magazines') }}</div>
        </a>
        
    </div>



    <div class="w-full px-4" > <!--style="border:solid red"-->

        <!--Entire bio
            <div>
                <p>{{ bio }}</p>
            </div>
            <br><br><br>
        -->


        <!--Biography-->
        <div class="w-full md:max-w-xl mt-6 mb-12 scroll-mt-44 md:scroll-mt-48" id="biography"> <!--style="border:solid grey 2px" -->
            <img :src="biography.it.image" class="w-40 md:w-60 mb-10">
            <h3 class="brg-txt-heading mb-4">{{ $t('biography') }}</h3>
            <MDC v-if="locale === 'it'" :value="biography.it.text" />
            <MDC v-else-if="locale === 'en'" :value="biography.en.text" />
        </div>
        
        
        <!--Awards List-->
        <div class="w-full md:max-w-xl mb-12 scroll-mt-32 md:scroll-mt-48" id="awards"> <!--style="border:solid grey 2px" -->
            <h3 class="brg-txt-heading mb-4">{{ $t('awards') }}</h3>
            <!--<p>{{ awards }}</p>-->
            <div v-for="award in awards" class="w-full flex flex-row brg-txt-body" > <!--style="border:solid lightgray"-->
                <div class="w-12 flex-none" > <!--style="border:solid red"-->
                    <p>{{ award.year }}</p>
                </div>
                <div class="flex-1" > <!--style="border:solid blue"-->
                    <MDC :value="award.text"/>
                </div>
            </div>
        </div>
        
        
        <!--Public Collections List-->
        <div class="w-full md:max-w-xl mb-12 scroll-mt-32 md:scroll-mt-48" id="publiccollections" > <!--style="border:solid grey 2px" -->
            <h3 class="brg-txt-heading mb-4">{{ $t('publiccollections') }}</h3>
            <!--<p>{{ publicColls }}</p>-->
            <div v-for="publicColl in publicColls" class="w-full flex flex-row brg-txt-body mb-2" > <!--style="border:solid lightgray"-->
                <div class="w-12 flex-none" > <!--style="border:solid red"-->
                    <p>{{ publicColl.year }}</p>
                </div>
                <div class="flex-1" > <!--style="border:solid blue"-->
                    <MDC :value="publicColl.text"/>
                </div>
            </div>
        </div>
        
        
        <!--Solo Exhibition List-->
        <div class="w-full md:max-w-xl mb-12 scroll-mt-32 md:scroll-mt-48" id="soloexhibitions"> <!--style="border:solid grey 2px" -->
            <h3 class="brg-txt-heading mb-4">{{ $t('soloexhibitions') }}</h3>
            <!--<p>{{ soloExhibs }}</p>-->
            <div v-for="soloExhib in soloExhibs" class="w-full flex flex-row brg-txt-body mb-2" > <!--style="border:solid lightgray"-->
                <div class="w-12 flex-none" > <!--style="border:solid red"-->
                    <p>{{ soloExhib.year }}</p>
                </div>
                <div class="flex-1" > <!--style="border:solid blue"-->
                    <MDC :value="soloExhib.text"/>
                </div>
            </div>
        </div>
        
        
        <!--Group Exhibition List-->
        <div class="w-full md:max-w-xl mb-12 scroll-mt-32 md:scroll-mt-48" id="groupexhibitions"> <!--style="border:solid grey 2px" -->
            <h3 class="brg-txt-heading mb-4">{{ $t('groupexhibitions') }}</h3>
            <!--<p>{{ groupExhibs }}</p>-->
            <div v-for="groupExhib in groupExhibs" class="w-full flex flex-row brg-txt-body mb-2" > <!--style="border:solid lightgray"-->
                <div class="w-12 flex-none" > <!--style="border:solid red"-->
                    <p>{{ groupExhib.year }}</p>
                </div>
                <div class="flex-1" > <!--style="border:solid blue"-->
                    <MDC :value="groupExhib.text"/>
                </div>
            </div>
        </div>
        
        
        <!--Pubblications List-->
        <div class="w-full md:max-w-xl mb-12 scroll-mt-32 md:scroll-mt-48" id="pubblications"> <!--style="border:solid grey 2px" -->
            <h3 class="brg-txt-heading mb-4">{{ $t('pubblications') }}</h3>
            <!--<p>{{ pubblications }}</p>-->
            <div v-for="pubblication in pubblications" class="w-full flex flex-row brg-txt-body mb-2" > <!--style="border:solid lightgray"-->
                <div class="w-12 flex-none" > <!--style="border:solid red"-->
                    <p>{{ pubblication.year }}</p>
                </div>
                <div class="flex-1" > <!--style="border:solid blue"-->
                    <MDC :value="pubblication.text"/>
                </div>
            </div>
        </div>


        <!--Magazines list-->
        <div class="w-full md:max-w-xl mb-12 scroll-mt-32 md:scroll-mt-48" id="magazines"> <!--style="border:solid grey 2px" -->
            <h3 class="brg-txt-heading mb-4">{{ $t('magazines') }}</h3>
            <!--<p>{{ pubblications }}</p>-->
            <div v-for="magazine in magazines" class="w-full flex flex-row brg-txt-body mb-2" > <!--style="border:solid lightgray"-->
                <div class="w-12 flex-none" > <!--style="border:solid red"-->
                    <p>{{ magazine.year }}</p>
                </div>
                <div class="flex-1" > <!--style="border:solid blue"-->
                    <MDC :value="magazine.text"/>
                </div>
            </div>
        </div>


    </div>


    
    
    <!--
        <div class="mt-48"></div>

        <p>----------------------------------------</p>
        <div class="mt-48"></div>
        <p>VARIABLES PRINT TEST</p>
        <p><strong>locale: </strong>{{ locale }}</p>
        <p><strong>contentPath: </strong>{{ contentPath }}</p>
        <p><strong>myKey: </strong>{{ myKey }}</p>
        
        <p>----------------------------------------</p>
        <br>
        <br>
        
        <p><strong>biodata</strong></p>
        <p>{{ biodata }}</p>
        <br>
        
        <p>----------------------------------------</p>
        <p><strong>biography</strong></p>
        <p>{{ biography }}</p>
        <br>
        
        <p><strong>biography / content</strong></p>
        <MDC :value=biography.it.text />
        <br>
        
        <p>----------------------------------------</p>
        <p><strong>extractAwards</strong></p>
        <p>{{ extractAwards }}</p>
        <br>
        
        <p><strong>awards</strong></p>
        <p>{{ awards }}</p>
        <br>
    -->



</template>
