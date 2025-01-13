<template>
  <CareerHero/>
  <CareerText/>
</template>

<script>
import CareerHero from '@/components/CareerComponent/CareerHero.vue';
import CareerText from '@/components/CareerComponent/CareerText.vue';
export default {
    components:{
        CareerHero, CareerText
    }

}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.container{
    
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;

}
.main{
    flex: 1;
}
</style>