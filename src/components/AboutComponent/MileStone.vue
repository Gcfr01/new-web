<template>
   <section class="milestion">
        <h3>Our Journey so Far</h3>
            <p>This is how far we have grown since we began and we are still growing</p>
            <div class="growths">
                <div class="growth-1">
                    <i class="fa-solid fa-map"></i>
                    <p>2000+ hectares of FarmLand</p>
                </div>
                <div class="growth-2">
                    <i class="fa-solid fa-people-line"></i>
                    <p>500+ Employees</p>
                </div>
                <div class="growth-3">
                    <i class="fa-solid fa-egg"></i>
                    <p>8Million+ DOC's</p>
                </div>
                <div class="growth-4">
                    <i class="fa-solid fa-kiwi-bird"></i>
                    <p>1Million+ Tons of frozen chicken</p>
                </div>
            </div>
    </section>
   
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .milestion {
    //background: #E0DEDE;
    text-align: center;

    h3 {
       // margin-top: -3em;
        color: #CA0407;
    }

    .growths {
        display: grid;
        grid-template-columns: 45% 45%;
    }

    .growths div {
        padding: 100px .6em   ;
        height: 100px;
        width: 90%;
        background: #ffffff;
        
        margin-bottom: 10px;
        margin-left: 1em;
        text-align: center;
        justify-items: center;
        border: 1px solid #ccc;
        box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
            background: #CA0407;
            transform: scale(1.1);

            i,
            p {
                color: #ffffff;
            }

        }

        i {
            font-size: 4em;
            color: #CA0407;
        }

        p {
            color: #6C757D;
        }


    }
}
@media only screen and (min-width: 768px){
    .milestion {
        width: 90vw;
        margin: 0 auto;
        .growths {
            grid-template-columns: 25% 25% 25% 25%;
        }
    }

}
@media only screen and (min-width: 1024px){
     .milestion {
        
        h3 {
            font-size: 1.5em;
            line-height: 3em;
            margin-bottom: -1em;
            }

        .growths {
            div {
                width: 90%;
            }
        }

    }

}
@media only screen and (min-width: 1250px){
      .milestion {
        h3 {
            margin-top: -20px;
            // margin-bottom: 10px;
        }
    }
}

</style>