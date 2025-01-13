<template>
  <div class="container">
    <AboutHero/>
    <AboutUsSection/>
    <MileStone/>
    <PillarSection/>
    <InfoSection/>
  </div>
</template>

<script>
  import AboutHero from '@/components/AboutComponent/AboutHero.vue';
  import AboutUsSection from '@/components/AboutComponent/AboutUsSection.vue';
  import MileStone from '@/components/AboutComponent/MileStone.vue';
  import PillarSection from '@/components/AboutComponent/PillarSection.vue';
  import InfoSection from '@/components/AboutComponent/InfoSection.vue';
export default{
  components:{
     AboutHero, AboutUsSection, MileStone, PillarSection, InfoSection
  }
  
}
</script>

<style scoped>

body {
    background: #f1f1f1;
    margin: 0;
    font-family: 'poppins';
    max-width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;

}

html, body {
  /* margin: 0;
  padding: 0;
  height: 100%; */
}
.container{
    
  /* display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px; */

}
/* .about{
    flex: 1;
} */
</style>
