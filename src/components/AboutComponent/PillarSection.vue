<template>
   <section class="our-pillars">

        <div class="container">
            <h2>Our Pillars</h2>
            <p>Our Pillars are the foundation of our relationships with Customers, guiding every interaction with
                integrity and
                purpose.</p>
        </div>
        <div class="pilars">
            <div class="pillar-1">
                <i class="fa-regular fa-circle-check"></i>
                <h3>Quality</h3>
                <p>We strive to deliver the highest quality products and services that meet and exceed our customers'
                </p>
            </div>
            <div class="pillar-2">
                <i class="fa-regular fa-thumbs-up"></i>
                <h3>Customer Satisfaction</h3>
                <p>We are committed to ensuring that our customers are satisfied with our products and services.</p>
            </div>
            <div class="pillar-3">
                <i class="fa-solid fa-seedling"></i>
                <h3>Environmental & Social responsibility</h3>
                <p>We are committed to reducing our environmental footprint and promoting social responsibility in all
                    our operations.</p>
            </div>
            <div class="pillar-4">
                <i class="fa-solid fa-lightbulb"></i>
                <h3>Talent</h3>
                <p>We are committed to attracting, developing and retaining the best talent in the industry.</p>
            </div>
        </div>

    </section>

</template>

<script>
export default {

}
</script>

<style lang="scss">
    .our-pillars {
    .container {
        text-align: center;
       
        margin-bottom: 1em;

        h2 {
            color: #CA0407;
        }

        p {
            margin-top: -.5em;
        }
    }

    .pilars {
        display: grid;
        grid-template-columns: auto auto ;
        justify-content: space-between;

        div {
           padding: 0 10px;
            margin-bottom: 20px;
            border-left: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
           
            box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
            text-align: center;
            

            i {
                font-size: 2em;
                color: #CA0407;
            }

            h3 {
                color: #CA0407;
            }
        }
    }

}

@media only screen and (min-width: 768px){
     .our-pillars {
       margin: 0 auto;
       width: 90%;

        .pilars {
            div {
            
                margin-bottom: 50px;
                padding: 0 1em;
               
            }
        }
    }

}
@media only screen and (min-width: 1024px)
{
    .our-pillars {
        .container {
            h2 {
                font-size: 1.5em;
            }

            p {
                padding: 0 10em;
            }
        }

        .pilars {
            display: grid;
            grid-template-columns: auto auto auto auto;
            margin-left: 2em;

            div {
                width: 80%;
                }
        }

    }

}

</style>