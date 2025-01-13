<template>
  <BrandsHero/>

  <brandsOffers/>
  <BrandsMoreInfo/>
</template>

<script>
import BrandsHero from '@/components/OurBrands/BrandsHero.vue';
import BrandsOffers from '@/components/OurBrands/BrandsOffers.vue';
import BrandsMoreInfo from '@/components/OurBrands/BrandsMoreInfo.vue';
export default {
    components:{
        BrandsHero,BrandsOffers, BrandsMoreInfo 
    }

}
</script>

<style>
    body {
    background: #f1f1f1;
    margin: 0;
    font-family: 'poppins';
    max-width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;

}
</style>