<template>
   <div class="career-head">
        <h2>Careers at Dayntee Farms Limited</h2>
    </div>
    <section class="career-hero">

    </section>

</template>

<script>
export default {

}
</script>

<style lang="scss">
    .career-hero{
    background: url(/src/assets/tech.jpg);
    background-size: cover;
        height: 20vh;
        background-position: center;
        background-repeat: no-repeat;
        padding: 3em 1em;
}

@media only screen and (min-width: 768px){
    .career-head{
        margin: -3em auto 0;
    }
    .career-hero{
        height: 30vh;
    }
}
@media only screen and (min-width: 1024px) {
     .career-hero {
        height: 60vh;
        width: 100%;
    }
}
@media only screen and (min-width: 1250px){
    .career-hero{
height: 50vh;
    } 
}
@media only screen and (min-width: 1450px){
    .career-hero {
            height: 50vh;
        }
}
</style>