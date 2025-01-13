<template>
  <div class="about-hero">
        <div :style="backgroundStyle" class="background-image container">
            <div class="hero-left">
                <h2>Leading Agri-Tech Innovators in North Central Nigeria: Pioneering High-Quality Poultry Production
                    for Global Food
                    Security</h2>
                <p>One of the Fastest agri-tech Organization in North central Nigeria that
                    engages in producing high quality and healthy poultry products to Nigerians,
                    focused towards maximum contribution to global food security.
                </p>

                <p class="engage">We engaged services of qualified professionals in the field of veterinary medicine,
                    animal science, engineering,
                    accounting, marketing and business administration, managing the farm operations which comprise of
                    breeder farm,
                    hatchery, feed milling, broiler fattening, live bird processing plant and Day-Old chicks production.
                </p>
                </div>
         <div class="hero-right">
                <ul class="image-grid">
                    <li>
                        <img src="@/assets/1.png" alt="Image 1">
                    </li>
                    <li>
                        <img src="@/assets/3.png" alt="Image 2">
                    </li>
                     <li>
                        <img src="@/assets/staff2.jpg" alt="Image 8">
                    </li>
                    <li>
                        <img src="@/assets/hatchery1.png" alt="Image 3">
                    </li>
                    <li>
                        <img src="@/assets/pen200.png" alt="Image 7">
                    </li>
                   
                    <li>
                        <img src="@/assets/team2.png" alt="Image 9">
                    </li>
                    <li>
                        <img src="@/assets/process.jpg" alt="Image 4">
                    </li>
                    <li>
                        <img src="@/assets/staff3.jpeg" alt="Image 5">
                    </li>
                    <li>
                        <img src="@/assets/process2.jpeg" alt="Image 6">
                    </li>
                    
                    </ul>
            </div>
        </div>
    </div>

    
          
</template>

<script>
export default {
         computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${require('@/assets/farmfield.jpg')})`, // Adjust the path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       //width: '100%',
        //height: '100vh', // or any other height you need
      };
    }
  }
   
}
</script>

<style lang="scss">
    .about-hero .container {
   
    .hero-left {
        display: none;
    }

    .hero-right {
        //height: 40%;
        width: 60%;
       margin-left: 9em;

       ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        li{
            list-style-type: none;
            
            img{
                width: 90%;
                margin-bottom: 1.5em;
            }
        }
       }
    }

}
@media only screen and (min-width: 768px){
    .about-hero .container {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .hero-left {
            display: block;
            text-align: center;
            margin-left: 3em;
            color: #333;
            background-color: rgba(255, 255, 255, 0.5);
            font-weight: bold;
            padding: 10px;
            border-radius: 5px;

            .engage {
                display: none;
            }

            h2,
            p {
                color: #20272e;
            }

        }

        .hero-right {
            width: 90%;
            text-align: center;
            margin-left: 0.5em;

           ul li{
            img{
                width: 80%;
            }
           }
        }
    }

}
@media only screen and (min-width: 1024px){
 .about-hero {
        margin: 0 auto;
        position: relative;
        top: 5em;
        margin-bottom: 5em;
        width: 100vw;

        .container .hero-left {
            padding: 30px;

            .engage {
                display: block;
            }
        }

       
    }
   
}
@media only screen and (min-width: 1250px){
   .about-hero {
   // height: 30%;
            margin-top: -5em;
        .container {
            p {
                line-height: 35px;
            }
        }

        
    }
  
}
@media only screen and (min-width: 1450px){
   
    
        
}

</style>