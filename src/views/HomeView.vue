<template>
  <div class="home">
    <HeroView/>
    <FeautureSection/>
    <TestimonialSection/>
    <ContactSection/>
    

</div>
</template>

<script>
import HeroView from '@/components/MainComponent/HeroView.vue';
import FeautureSection from '@/components/MainComponent/FeautureSection.vue';
import TestimonialSection from '@/components/MainComponent/TestimonialSection.vue';
import ContactSection from '@/components/MainComponent/ContactSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeroView, FeautureSection, TestimonialSection, ContactSection
  }
}

</script>

<style lang="scss">


html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.home{
    
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;

}
.main{
    flex: 1;
}
/* Global Styles */
body {
  background: #f1f1f1;
  margin: 0;
  font-family: "poppins";
  max-width: 100vw;
  overflow-x: hidden;
}
#back-to-top {
  position: fixed;
  bottom: 20px;
  right: 750px;
  display: none;
  background-color: rgb(7, 7, 80);
  color: white;
  padding: 10px 15px;
  border-radius: 50px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: opacity 0.3s ease;
}
#back-to-top:hover {
  background-color: #00264d;
}


@media only screen and (min-width: 768px) {
  .mobile-menu {
    display: none;
  }

  .navbar .container {
    display: grid;
    grid-template-columns: 180px auto;
    padding: 1.2em;
  }

  .navbar .container .logo {
    font-size: 1.2em;
    position: relative;
  }

  .navbar .container span {
    position: absolute;
    top: 1em;
    left: 2em;
  }

  .left-col h1 {
    margin-bottom: 50px;
    color: #000000;
  }

  .left-col .subhead-details {
    font-size: 1em;
  }

  .navbar nav {
    display: flex;
    justify-content: space-between;
    background: none;
    position: unset;
    height: auto;
    width: 100%;
    padding: 0;
    margin-left: -100px;
  }

  .navbar nav ul {
    display: flex;
  }

  .navbar nav a {
    color: black;
    font-size: 1em;
    padding: 0.1em 1}

  }
</style>
