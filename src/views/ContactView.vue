<template>
  <ContactHero/>
  
  <ContactInfo/>
  
  <ContactMap/>
  
</template>

<script>
import ContactInfo from '@/components/OurContact/ContactInfo.vue';
import ContactHero from '@/components/OurContact/ContactHero.vue';

//import ContactMessage from '@/components/OurContact/ContactMessage.vue';
import ContactMap from '@/components/OurContact/ContactMap.vue';
export default {
    components:{
         ContactInfo, ContactHero, ContactMap
    }
}




</script>

<style>

</style>