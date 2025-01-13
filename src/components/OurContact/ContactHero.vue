<template>
   <section class="contact-hero">        
            <h1>CONTACT US</h1>
            <p>Below are our Contact Informations</p>  
    </section>
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

.contact-hero {
    // background: url(../images/farm-environ.jpg);
    background: url(/src/assets/gate.png);
    background-size: cover;

    background-position: center;
    background-repeat: no-repeat;
    padding: 3em 1em;


    h1 {
        color: var(--primary-color);
        font-size: 3em;
    }
    p{
        //color: var(--primary-color);
               color: white;
        font-weight: bold;
    }
}
@media only screen and (min-width: 768px)
{
     .contact-hero{
    background-size: cover;
        /* Make sure the image covers the hero section */
        height: 50vh;
   } 
}


</style>