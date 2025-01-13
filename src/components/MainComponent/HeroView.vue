<template>
  <section class="hero">
        <div class="container">
            <div class="left-col">
                <p class="subhead">Fresh and Feathered: Welcome to Dayntee Farms Where Quality Meets Care</p>
                <h4 class="experience">Experience the Taste of Nature's Best: Fresh, Sustainable, and Delicious Poultry
                    at Dayntee Farm.
                </h4>
                 <!-- <h3>Dayntee Farms is a state-of-the-art poultry operation equipped with advanced facilities including rearing houses, layer
                 houses, feed mills, and processing equipment.</h3> -->
                <!-- <h3> Dayntee's Ivory Chicken  Ordering</h3> -->
                <h2 >Ivory Frozen Chicken and Dayntee Day Old Chicks Now Available for Order!!!</h2>
                

                <p class="subhead-details">Discover the convenience of ordering our premium poultry products from the
                    comfort of your home. </p>
                    
                <p class="visit-text">Visit <a href="shop.daynteefarms.com">Dayntee Farm Shop</a> and experience the
                    taste of excellence today!</p>               
        </div>
        <div class="hero-cta">
                        <!-- WhatsApp link with title attribute -->
                        
                        <p><a href="https://youtu.be/eFix_48PfKU?si=RpGMhyw3_RG9clOC" class="watch-video-cta" target="_blank" title="Watch a video about us">
            <img src="@/assets/watch.svg" alt="Watch a video about our company"> Click to Watch a Video about us</a>
                </p>
                <a href="https://wa.me/2349040005037" target="_blank" class="primary-cta" title="Order products via WhatsApp">CLICK HERE TO MAKE ORDER </a>
                        </div>

         
            <ul class="products-list">

                
                    <li><img class="hero-img" id="egg" src="@/assets/eggs.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/chicks.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/chicken.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/vertical.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/18.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/8.png" alt="Dayntee chicks"></li>
                    <!-- <li><img class="hero-img" id="egg" src="@/assets/9.png" alt="Dayntee chicks"></li> -->
                    <li><img class="hero-img" id="egg" src="@/assets/17.png" alt="Dayntee chicks"></li>
                    <li> <img class="hero-img" id="egg" src="@/assets/whole.png" alt="person"></li>  
                    <li> <img class="hero-img" id="egg" src="@/assets/10.png" alt="person"></li>  
                    <li> <img class="hero-img" id="egg" src="@/assets/yellow.png" alt="person"></li>  
                    <li> <img class="hero-img" id="egg" src="@/assets/white.png" alt="person"></li>
                     <li> <img class="hero-img" id="egg" src="@/assets/yellowpack.png" alt="person"></li>  
                        
         
            </ul>


        </div>

    </section>

</template>

<script>
export default {

}
</script>

<style lang="scss">
        
.hero {
  text-align: center;
}

.hero .container {
  max-width: 95%;
}

.left-col {
  background-image: url(/src/assets/farmfield.jpg);
  z-index: -100;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  padding: 0.5em 1em;
  max-width: 100vw;
}

.left-col .subhead {
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
  letter-spacing: 0.3em;
}

.left-col .subhead-details {
  color: #333;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
}

.left-col .visit-text {
  display: none;
}

.left-col a {
  color: #CA0407;
}

.left-col h2 {
 
  //font-size: 2.5em;
  color: #011f80;
  line-height: 1.3em;
  margin-top: 0.2em;
}

 .primary-cta {
  background: var(--primary-color);
  color: #f1f1f1;
  text-decoration: none;
  padding: 0.6em 1.4em;
  font-size: 1em;
  border-radius: 5em;
  display: inline-block;
}

 .watch-video-cta {
  display: block;
  margin-top: 1em;
}

.left-col img {
  margin-right: 0.5em;
}

.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  padding-right: 0.5em;
  margin-left: -2em;

  
    list-style-type: none;

  
}

.hero-img {
  width: 100%;
  margin-top: 3em;
}

#egg {
  height: 400px;
}

@media only screen and (min-width: 768px){
  .hero {
        p {


            font-size: 1.5em;
        }

        h4 {
            margin: 50px 0;
        }

        .subhead-details {
            font-weight: bold;
            padding: 30px;
        }

        .hero-cta {
            padding: .6em 1.4em;
            font-size: 1em;

            .watch-video-cta {
                color: #CA0407;
                font-weight: bold;
            }

        }
    }

   .left-col {

        h2 {
            font-size: 2em;
  
  line-height: 1.3em;
  margin-top: 0.2em;
            margin-bottom: 50px;
            color: white;
        }

        .subhead-details {
            font-size: 1em;
        }
    }

   
}
@media only screen and (min-width: 1024px){
  .hero {

        position: relative;
        top: 3em;
      
        width: 100vw;
        margin: 0;
        
    
    }
   

    .hero .container {

        margin-top: -5em;
        
        .left-col {
            width: 100%;

            .subhead {
                font-size: 2em;
                padding-left: 2em;
                padding-right: 2em;
            }

            h1 {
                font-size: 3em;
                width: 90%;
                color: #011f80;
            }

            h3 {
                font-size: 1.5em;

            }

            .experience {
                padding: 0 5em;
            }

            .subhead-details {
                font-size: 1.2em;
                padding: 2em 6.5em;
            }

            .visit-text {
                padding: 0 10em;
                text-align: center;
            }

            .hero-cta {
                display: block;
            }
        }

        .products-list {
            padding: 2em;
        margin-left: -4.5em;
            li img {
                margin-left: 2em;
                height: 50%;
                width:  100%;
            }
        }
    }

   

}

@media only screen and (min-width: 1250px){
   .hero .container .left-col {
        .subhead {
            padding-left: 5em;
            padding-right: 5em;
        }

        h1 {

            margin: 0 auto;
        }

    }
}

@media only screen and (min-width: 1450px){
  .hero .container .left-col {
        margin-bottom: 5em;
    h1{
        color:#011f80;
    }
        .subhead {
            padding-left: 8em;
            padding-right: 8em;
        }

        .subhead-details {
            padding-left: 15em;
            padding-right: 15em;
            margin: 5em 0;
        }

        .experience {
            padding-left: 8em;
            padding-right: 8em;
        }

        .subhead-details {
            padding-left: 12em;
            padding-right: 12em;
        }

    }

    .products-list li img {
    width: 50%; /* Adjust the width of images */
  }

}


</style>