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
                <h2>Ivory Frozen Chicken and Dayntee Day Old Chicks Now Available for Order!!!</h2>
                

                <p class="subhead-details">At Dayntee Farms, we are committed to delivering premium-quality poultry products,
                     including fresh frozen chicken, day-old chicks (DOC), and value-added poultry solutions. Our expertise spans 
                     across poultry farming, Hatching, processing, and distribution, ensuring that individuals, businesses, and retailers receive
                      the highest standards of food safety and nutrition. </p>
                    
                <p class="visit-text">Visit <a href="shop.daynteefarms.com">Dayntee Farm Shop</a> and experience the
                    taste of excellence today!</p>               
        </div>
        <div class="hero-cta">
                        <!-- WhatsApp link with title attribute -->
                        
                        <p><a href="https://youtu.be/eFix_48PfKU?si=RpGMhyw3_RG9clOC" class="watch-video-cta" target="_blank" title="Click to Watch a video about us">
            <img src="@/assets/watch.svg" alt="Watch a video about our company"> Discover Our Story</a>
                </p>
                <a href="https://wa.me/2349040005037" target="_blank" class="primary-cta" title="Order products via WhatsApp">CLICK HERE FOR MORE ENQUIRY & ORDER </a>
                        </div>

         
            <ul class="products-list">

                    <li><img class="hero-img" id="egg" src="@/assets/poult chickens.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/hatch1.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/wh3.jpg" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/wh4.jpg" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/chicks.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/13.jpg" alt="Dayntee chicks"></li>
                    
                    <li><img class="hero-img" id="egg" src="@/assets/pro2.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/pro1.png" alt="Dayntee chicks"></li>
                   
                    <li><img class="hero-img" id="egg" src="@/assets/wh9.png" alt="Dayntee chicks"></li>
                    <li><img class="hero-img" id="egg" src="@/assets/wh10.png" alt="Dayntee chicks"></li>
                    <!-- <li><img class="hero-img" id="egg" src="@/assets/9.png" alt="Dayntee chicks"></li> -->
                    
                     
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
section {
  padding: 4rem 2rem;
}
        
.hero {
  text-align: center;
}


.hero .container {
  max-width: 95%;
}

.left-col {
  background-image: url(/src/assets/1.jpg);
  z-index: -100;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  padding: 0.5em 1em;
  max-width: 100vw;
}

.left-col .subhead {
  text-transform: uppercase;
  font-weight: bold;
 // color: red;
 color: rgb(7, 7, 80);
  letter-spacing: 0.3em;
}
.left-col .experience{
    color: white;
}


.left-col .subhead-details {
  //color: #333;
  color: #CA0407;
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
  color: rgb(6, 6, 62);
  line-height: 1.3em;
  margin-top: 0.2em;
  height: 2em;
  background:white;
  opacity: 0.7;
}

//  .primary-cta {
//   background: var(--primary-color);
//   color: #f1f1f1;
//   text-decoration: none;
//   padding: 0.6em 1.4em;
//   font-size: 1em;
//   border-radius: 5em;
//   display: inline-block;
// }
.primary-cta {
  background-color: #c0392b;
  color: #ffffff;
  padding: 1em 2em;
  border-radius: 30px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.3s;
}

 .watch-video-cta {
  background-color: #ffffff;
  color: #ffffff;
  padding: 1em 2em;
  border-radius: 30px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.3s;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: block;
 
}


.left-col img {
  margin-right: 0.5em;
}

.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  //padding-right: em;
  margin-left: -1em;

  
    list-style-type: none;
    li{
        margin-right: 1em;
    }
  
}

.hero-img {
  width: 100%;

  margin-top: 3em;
}
.hero h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
}

.hero p {
  font-size: 1.25rem;
  color: #dddddd;
  margin-top: 1rem;
}


#egg {
  height: 300px;
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