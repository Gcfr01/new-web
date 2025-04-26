<template>
  <section class="info">
        <div class="address-line">
            <h2>Contact Information</h2>
            <div class="group">
                <div class="address">
                    <h5>Address</h5>
                    <p>Km 5 Ajase-ipo - Offa Road, Amberi village, Kwara state</p>
                </div>
                <div class="Contacts">
                    <h5>Contacts</h5>
                    <p>Email: info@daynteefarms.com</p>
                    <p>Mobile: +234 (904) 005 5555, +234 (904)000 5037  </p>

                </div>
                <div class="links">
                    <h5>Quick links</h5>
                    <div class="links-nav">
                        <a href="https://www.facebook.com/profile.php?id=61566666213217"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/daynteefarmsltd/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/watch?v=eFix_48PfKU"><i class="fa-brands fa-youtube"></i></a>
                        <a href=" https://www.linkedin.com/company/dayntee-farms-limited/?originalSubdomain=ng"><i
                                class="fa-brands fa-linkedin"></i></a>
                        <a href="https://x.com/Ivory_chicken"><i class="fa-brands fa-twitter"></i></a>
                    </div>

                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
export default {

}
</script>

<style lang="scss">
        .info .address-line, .Contacts {

            padding: 0 1.5em;

    h2 {
        color: var(--primary-color);
    }

    h5 {
        color: var(--primary-color);
    }
}
@media only screen and (min-width: 768px){
    .info {
        background: #E0DEDE;

        

        .address-line .group {
            display: grid;
            grid-template-columns: auto auto auto;
            margin-top: -3em;


            div {

                box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.8);
                margin-right: 10px;
                padding-left: 10px;
            }

            .links{

                i{
                    font-size: 0.6em;
                }
            }
        }
    }
}
@media only screen and (min-width: 1024px){
    .info .address-line {
        text-align: center;
        .group h5{
            text-align: center;
        }
        h2{
            margin-top: -0.2em;
            margin-bottom: 2em;

        }

    }
}
@media only screen and (min-width: 1250px){
    .info .address-line .group {
        h5 {
            font-size: 1.2em;
        }

        p {
            font-size: 1em;
        }

       
    }
}
@media only screen and (min-width: 1450px){
     .info .address-line .group .links{
            .links-nav {
                
                //justify-content: center;
            }
        }
}

</style>