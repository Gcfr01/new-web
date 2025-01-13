<template>
  <div class="navbar">
    <div class="container">
      <div class="header">
        
            <!-- <a href="index.html" class="logo">Dayntee<span>Farms</span></a> -->
            <a href="index.html" class="logo">
                <img class="logo-img" alt="" src="@/assets/dt_logo.jpg">
              </a>

            <img id="mobile-cta" class="mobile-menu" alt="" ref="mobileMenu" src="@/assets/menu.svg" @click="toggleBar">
      
      </div>
      <nav ref="navs" :class="{'menu-btn' : isMenuOpen}">
          <img id="mobile-exit" class="mobile-menu-exit" src="@/assets/exit.svg" alt="" @click="removeBar">

          <ul class="primary-nav">
          <li><router-link to="/" @click="removeBar">Home</router-link></li>
          <li><router-link to="/about"  @click="removeBar">About Us</router-link></li>
          <li><router-link to="/brands" @click="removeBar">Our Brands</router-link></li>
          </ul>

          <ul class="secondary-nav">
          <li><router-link to="/contact" @click="removeBar">Contact</router-link></li>
          <li class="go-premium-cta"><router-link to="/career" @click="removeBar">Careers</router-link></li>
          </ul>
    </nav>
      <div class="dayntee-logo">
        <img src="@/assets/DAYNTEE_FARM_LOGO.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleBar() {
      //this.$refs.navs.classList.toggle('active');
      //this.$refs.mobileMenu.classList.toggle('active');
      //const navElement = this.$refs.navs;
      //navElement.classList.toggle('menu-btn');
      this.isMenuOpen = !this.isMenuOpen;
   
      },

      removeBar(){
        const navElement = this.$refs.navs;
        navElement.classList.toggle('menu-btn');
   

      }
      
  },

}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}

.navbar {
  background: white;
  padding: 0.5em;
  width: 100vw;
}

.navbar .logo {
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-size: 1.2em;
}

.navbar .logo img {
  width: 70px; /* Ensure the default width for the image */
}

.navbar .logo span {
  color: var(--primary-color);
}

.navbar nav {
  display: none;
}

.navbar nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.navbar nav ul .nav-link {
  text-decoration: none;
}

.navbar nav ul .nav-link.active {
  font-weight: bold;
}

.navbar .dayntee-logo {
  display: none;
}

.navbar .container {
  display: flex;
  place-content: space-between;
}

.navbar .mobile-menu {
  width: 30px;
  cursor: pointer;
  margin-right: 1.5em;
}

a {
  color: #444444;
}

nav.menu-btn {
  display: block;
}

nav {
  position: fixed;
  z-index: 999;
  width: 66%;
  right: 0;
  top: 0;
  background: #333;
  height: 100vh;
  padding: 1em;
}

nav ul.primary-nav {
  margin-top: 5em;
}

nav li a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 0.5em;
  font-size: 1.3em;
  text-align: right;
}

nav li a:hover {
  font-weight: bold;
}

nav .mobile-menu-exit {
  float: right;
  margin: 0.5em;
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
  
  .navbar {
    
    width: 100vw;
    height: auto;
    .header{
      
    }
  .logo img {
    
    top: 0;
    
    width: 50%; /* Adjust the width for larger screens */
    height: auto; /* Maintain aspect ratio */
    margin-left: -3.5em;
 
  }
  }
  .navbar .container {
    display: grid;
    grid-template-columns: auto auto;
    padding: 0.5em;

   
  }

  .navbar nav {
  //  display: flex;
  //   justify-content: space-between;
  //   background: none;
  //  position: unset;
  //   height: auto;
  //   width: 40%;
  //  padding: 0;
  //  display: flex;
  //   justify-content: space-between;
  //   background: none;
  //   position: unset;
  //   height: auto;
  //   width: 80%; /* Decreased width to fit better on the screen */
  //   padding: 0;
  //   margin-left: 0; /* Ensure the nav aligns properly on the left side */
  //   margin-right: auto; 
   
    

    a {
      color: black;
      font-size: 1em;
      padding: 0.1em 1em;
      white-space: nowrap;
      text-decoration: none;
      margin-right: 1em;
    }

    ul.primary-nav {
      margin: 0;
    }

    li.current a {
      font-weight: bold;
    }
  }

  .products-list li {
    img {
      width: 18em;
      height: auto;
    }
  }
  nav .mobile-menu-exit {
  display: none;
}
}

@media only screen and (min-width: 1024px) {

   .navbar .logo img {
    width: 50%; /* Adjust the width for larger screens */
    height: auto; /* Maintain aspect ratio */
    //margin-left: -3.5em;
  }

  nav {
    margin-right: 5em;
  }
}
</style>
