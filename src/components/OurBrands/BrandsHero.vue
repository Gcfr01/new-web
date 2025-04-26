<template>
  <section class="brands-hero">
            <h2>Dayntee</h2>
            <h3>Farms</h3>
            <h4>Limited</h4>

            <p>
                Dayntee Farm Limited is an ultra-modern integrated poultry farm equipped to raise chicks, layers to produce fertilized eggs hatched in our hatchery to produce Day-Old Chicks (DOC) for rearing and commercial purposes, and healthy broilers for our special Ivory Chicken, using state-of-the-art technologies..
            </p>
        </section>
        <BrandsOffers/>

</template>

<script>
export default {
}
</script>

<style lang="scss">
:root {
    //--primary-color: #007af3;
    --primary-color: #CA0407;
}
    .brands-hero {
    background-image: url(/src/assets/wh5.jpg);
    background-size:cover;

    background-position: center;
    background-repeat: no-repeat;

    padding: 0 1em;

    h2 {
        //color: var(--primary-color);
        color:#CA0407;
        font-size: 3em;
    }

    h3 {
        //color: var(--primary-color);
        color:white;
        font-size: 2em;
        margin-top: -1.5em;
    }

    h4 {
       // color: var(--primary-color);
       color:#CA0407;
        font-size: 1.5em;
        margin-top: -1.5em;
        margin-bottom: 5em;
    }

    p {
        color: var(--primary-color);
        
        line-height: 30px;
        background-color: white ;
    }

    }

    @media only screen and (min-width: 1080px) {
         .brands-hero{
        padding: 2em 3em;
        h2,h3,h4{
            margin-bottom: 1em;
        }
        p{
            font-weight: bold;
            padding-right:  10em;
        }
    }

    }



</style>