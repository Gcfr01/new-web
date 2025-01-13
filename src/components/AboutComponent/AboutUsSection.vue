<template>
  <section class="about-us">
        <div class="our-story">
            <h1>Our Story</h1>
            <p>At Dayntee Farms, we believe in the power of growth and transformation. Established in 2011, we have
                rapidly emerged as
                a pioneer in the poultry industry. Our journey began with commercial egg production, and through
                relentless innovation,
                we evolved into a thriving poultry breeding and hatching operation.</p>
            <p>By 2017, our passion for excellence led us to expand into broiler meat processing, proudly introducing
                our flagship
                product, Ivory Chicken. This premium line exemplifies our commitment to quality and sustainability.</p>
            <p>Join us as we continue to nurture dreams, embrace progress, and cultivate a future filled with promise
                and prosperity.
                At Dayntee Farms, we're more than just a farm; we're a movement towards a better tomorrow.</p>
        </div>
        <div class="our-vision">
            <div class="vision">
                <h2>Our Vision</h2>
                <p>To be the leading provider of premium poultry products, nurturing a healthier and more sustainable
                    future for
                    generations.</p>
            </div>
            <div class="our-mission">
                <h2>Our Mission</h2>
                <p>To deliver excellence in every aspect of poultry farming, from breeding to processing, while
                    embracing innovation,
                    sustainability, and community growth.</p>
            </div>
            <div class="our-motto">
                <h2>Our Motto</h2>
                <p>Growing Together, Sustaining Tomorrow</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .about-us {
        text-align: justify;
    
    .our-story {
        
        background: #FFFFFF;
        padding: .5em 1em;
        

        

        h1 {
            color: #CA0407;
        }
    }

    .our-vision {
         padding: .5em 1em;
       

        h2 {
            color: #CA0407;
        }

        div {
            border-bottom: 2px solid #ccc;
            box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);


        }
        .vision, .our-mission, .our-motto{
            padding: 0 1em;
        }


    }

}

@media only screen and (min-width: 768px){
     .about-us {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr ;
        gap: 20px;

        .our-story {
           margin-bottom: 6em;
           width: 90%;
        }
    }

    .our-vision {
        display: grid;
        grid-template-columns: auto auto auto;
       // margin-top: ;

        div {
            z-index: 9999;
            margin-top: -8em;
            margin-right: 8em;
            width: 80%;

        }
    }  

}
@media only screen and (min-width: 1024px){
     .about-us {
        //text-align: center;

        .our-story {
            margin: 1em auto 5em;
            padding: 0 3em 1em;
            box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
            h1{
                text-align: center;
            }
        }

        .our-vision {
            margin: 2em auto ;
            text-align: center;
        

            div {
                text-align: left;
                padding: 1em 5em;
                //width: 95%;
                box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
        

            }
        }
    }

}
@media only screen and (min-width: 1250px){
     .about-us {
       display: flex;
        flex-direction: column;

        .our-story {
            height: 100%;

            p {
                padding: 10px 4em;
                
            }
        }

        .our-vision{
            width: 80vw;
            margin-top: 3em;
        }
       

    }

}
@media only screen and (min-width: 1450px){
    .about-us{
            .our-vision{
                margin-top: 5em;
            }
        }
       
}
</style>