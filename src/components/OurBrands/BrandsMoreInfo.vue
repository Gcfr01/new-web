<template>
    <section class="more-info">
            <!-- <div class="more-info-container">
                <h1>DAYNTEE FARM <SPAN>INFORMATION</SPAN></h1>
                    <p><span>Dayntee Farms</span> is a state-of-the-art integrated poultry operation, specializing in
                        the
                        production of
                        Healthy Day old Chicks, Ivory Frozen whole Chicken and Chicken parts. </p>
                    <p><span>Our vision</span> is to become Nigeria's leading brand in Day Old Chicks  and Frozen Chicken Production.
                    </p>
                    <p><span>Our
                            mission</span> is to lead the Nigerian market in DOC and Frozen Chicken production by adhering to
                        world-class
                        standards of
                        bio-security and
                        quality, utilizing locally sourced raw materials to ensure sustainable food security and
                        contribute
                        to
                        national economic
                        development.</p>
            </div> -->
            <!-- <section class="office-house">

            </section> -->
        </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .more-info {
    padding: 1em;

    h1 {
        color: var(--primary-color);
        font-size: 3em;

        span {
            font-weight: lighter;
        }
    }

    p {
        margin-top: -1em;
        margin-bottom: 2em;

        span {
            font-weight: bold;
            color: var(--primary-color);
        }
    }
}

.office-house {
    background-image: url(/src/assets/pro1.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0 1em;
    height: 15em;

}
@media only screen and (min-width: 768px){
   .more-info {

        h1,
        p {
            padding: 0.2em;
            text-align: left;
        }

       
    }

}
</style>