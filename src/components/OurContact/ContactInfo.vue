<template>
    <section class="conatact-info">
        <h1>CONTACT INFO</h1>
        <div class="container">
            <div class="address">
                <i class="fa-solid fa-address-card"></i>
                <h2>ADDRESS</h2>
                <p>Km 5 Ajase-ipo - Offa Road, Amberi village, Kwara state</p>
            </div>
            <div class="phone">
                <i class="fa-regular fa-phone"></i>
                <h2>PHONE</h2>
                    <p>+234 (904) 005 5555 | +234 (904) 000 5037</p>
            </div>
            <div class="email">
                <i class="fa-regular fa-envelope"></i>
                <h2>EMAIL</h2>
                <p>info@dayntee.com</p>
                <p>sales@dayntee.com</p>
            </div>
            <div class="socials">
                <i class="fa-brands fa-medium"></i>
                <h2>OUR SOCIAL MEDIAS</h2>
                <p>
                    <a href="https://web.facebook.com/DaynteeFarmsLtd"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/daynteefarmsltd/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/watch?v=eFix_48PfKU"><i class="fa-brands fa-youtube"></i></a>
                    <a href=" https://www.linkedin.com/company/dayntee-farms-limited/?originalSubdomain=ng"><i
                            class="fa-brands fa-linkedin"></i></a>
                    <a href="https://x.com/DaynteeFarms"><i class="fa-brands fa-twitter"></i></a>
                </p>
            </div>
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .conatact-info {
    text-align: center;
    margin-top: -2em;
    padding-bottom: 2em;

    h1 {
        color: var(--primary-color);
        font-size: 3em;
    }

    .container {

        div {
            padding: 1em 3em;
            margin: 0 1em;
            border: 1px solid var(--primary-color);
            height: 12em;

            i {
                color: var(--primary-color);
                font-size: 1.7em;
            }
        }

        .socials p a {
            margin-right: 20px;
        }
    }
}
@media only screen and (min-width: 768px){
    .conatact-info .container{
    display: grid;
    grid-template-columns:  auto auto;
              div i {
                color: var(--primary-color);
                font-size: 1.2em;
            }
   }
}

@media only screen and (min-width: 1024px){
    conatact-info .container{
    display: grid;
        grid-template-columns: 1fr 1fr;
}
}

@media only screen and (min-width: 1250px){
     .conatact-info .container {
        margin: 0 5em;
    }
        


}

</style>