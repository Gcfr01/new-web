<template>
  <div id="app">
  <NavigationSection/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/brands">Contact</router-link>
    <router-link to="/career">Careers</router-link>


  </nav> -->
  <router-view/>
  <FooterView/>
  <button 
      id="back-to-top" 
      @click="backToTop" 
      style="display: none; position: fixed; bottom: 20px; right: 20px; z-index: 1000;"
    >
      ↑ Top
    </button>
  </div>
</template>

<script>
import FooterView from './components/FooterView.vue';
import NavigationSection from './components/NavigationSection.vue';

export default{
  components:{
    FooterView, NavigationSection
  },
  name: 'App',
  mounted() {
    window.addEventListener('scroll', this.scrollFunction);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      const button = document.getElementById('back-to-top');
      if (button) {
        if (window.scrollY > 300) {
          button.style.display = 'block';
        } else {
          button.style.display = 'none';
        }
      }
    },
    backToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
:root {
  --primary-color: #CA0407;
}
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   min-height: 100vh;
  display: flex;
  flex-direction: column;
  
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
router-view {
  flex: 1;
}

nav {
  display: none;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #e91515;
}
</style>
