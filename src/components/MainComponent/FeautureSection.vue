<template>
  <section class="features-section">
        <div class="container">
            <h2>Our Services</h2>
            <ul class="features-list">
                <li>Quality and Affordable Poultry products</li>
                <li>Chicken Processing</li>
                <li>Poultry Breeding</li>
                <li>Hatching Operation</li>
                <li>Broiler Fattening</li>
                <li>Feedmill</li>
            </ul>

        </div>

    </section>

</template>

<script>
export default {

}
</script>

<style lang="scss">
    .features-section {
  background: #20272e;
  color: white;
  padding: 0.5em 1em;
  
  
}

ul.features-list {
  margin: 0;
  padding-left: 0.1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
}

ul.features-list li {
  font-size: 1.1em;
  margin-bottom: 1em;
  margin-left: 2em;
  position: relative;
}

ul.features-list li:before {
  content: " ";
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url("/src/assets/bullet.svg");
  background-size: contain;
  margin-right: 0.5em;
  left: -2em;
}

.features-section img {
  display: none;
}

@media only screen and (min-width: 768px) {
  .features-list{
    text-align: left;
  }
}
@media only screen and (min-width: 1024px){
   ul.features-list {
        display: block;
        margin-left: 1em;

        li {
            font-size: 1.4em;

            &:before {
                width: 30px;
                height: 30px;
            }
        }
    }

    .features-section {
      
        margin: 5em 0 ;
        width: 100%;


        h2 {
            text-align: center;
            margin-bottom: 1.5em;
            font-size: 2em;
        }

        ul {
          display: grid;
        grid-template-columns: 1fr 1fr 1fr;
            text-align: center;
            margin-left: -.8em;

            li{
              margin-bottom: 2em;
            }
        }
    }

    .features-section img {
        display: block;
        position: absolute;
        right: 0;
        width: 250px;
        bottom: -4em;
        border-radius: 2em;
    }
}

@media only screen and (min-width: 1250px){
  .features-section {
        .container {
            .features-list {
                li {
                    font-size: 1.25em;
                }
            }
        }
    }

}

@media only screen and (min-width: 1450px){
  
}



</style>