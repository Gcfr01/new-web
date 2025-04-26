<template>
  <section class="offers">
    <div class="offers-container">
      <h1>OUR <span>PRODUCTS</span></h1>
      <p class="we">
        We offer a variety of poultry products including Day-Old chicks, Frozen Chicken in different pack: Ivory Whole Chicken,Ivory chicken Laps, Ivory family packs,
        Ivory chicken fillets, and Ivory chicken wings etc. Our products are available in various formats to suit your needs.
      </p>
      <div class="product-table">
        <div v-for="(product, index) in products" :key="index" :class="`prod${index + 1}`">
          <img :src="product.imageSrc" :alt="product.altText" />
          <div>
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </div>
          
        </div>
        
      </div>
      <p class="bulk"> For Bulk Purchase and Distributorship across the country, send us mail: sales@daynteefarms.com or call 09040055555 or 08090705449 </p>

    </div>
  </section>
</template>

<script>
export default {
 name: "BrandsOffer",
  data() {
    return {
      products: [
        {
          imageSrc: require("@/assets/eggs.png"), // Use require only if you're using dynamic imports
          altText: "Table Eggs",
          title: "Hatchable Eggs",
          description: "We produce high-quality fertilized poultry eggs with exceptional hatchability, sourced from a clean and serene environment. Our advanced feed mill system ensures efficient nutrient transfer from feed to egg, guaranteeing healthy Day-Old Chicks (DOC) from our hatchery."   },
        {
          imageSrc: require("@/assets/doc1.png"),
          altText: "Dayntee Chicks",
          title: "Dayntee Vaccinated Chicks",
          description: "We offer premium Day-Old chicks raised in a clean and controlled environment. Our advanced care and nutrition protocols ensure healthy, robust chicks with optimal growth potential, thanks to the precise feed formulations we use."
        },
        {
        imageSrc: require("@/assets/ab3.png"),
          altText: "Poultry Birds",
          title: "Poultry Birds",
          description: "We provide high-quality poultry birds raised in a pristine and controlled environment. Our meticulous management and advanced feeding practices ensure robust, healthy birds with exceptional growth and performance."
        },
        {
        imageSrc: require("@/assets/7.png"),
          altText: "Whole Chicken",
          title: "Ivory Whole Chicken",
          description: "We provide high-quality Ivory Whole Chicken processed in an hygenic and controlled environment. Our healthy protocols and advanced processing practices ensure tender, healthy, and nutritious chicken, delivering exceptional quality and taste for our customers."
        },
        {
          imageSrc: require("@/assets/fillet.png"),
          altText: "Chicken Fillet",
          title: "Ivory Chicken Fillet",
          description: "Our chicken fillets are tender, juicy, and expertly processed to ensure premium quality. Perfect for a variety of dishes, they provide a delicious and nutritious option for your meals."
        },
        {
          imageSrc: require("@/assets/wings.png"),
          altText: "Chicken Wings",
          title: "Ivory Chicken Wings",
          description: "Our chicken wings are flavorful and succulent, expertly prepared to ensure top quality. Ideal for grilling, baking, or frying, they offer a delicious and versatile choice for your culinary needs."
        },
        {
          imageSrc: require("@/assets/drumstick.jpg"),
          altText: "Ivory Drum Stick",
          title: "Drum Stick",
          description: "Our chicken wings are flavorful and succulent, expertly prepared to ensure top quality. Ideal for grilling, baking, or frying, they offer a delicious and versatile choice for your culinary needs."
        },
        {
          imageSrc: require("@/assets/gizzards.jpg"),
          altText: "Gizzard",
          title: "Gizzard",
          description: "Our chicken wings are flavorful and succulent, expertly prepared to ensure top quality. Ideal for grilling, baking, or frying, they offer a delicious and versatile choice for your culinary needs."
        },
         {
        imageSrc: require("@/assets/8.png"),
          altText: "Laps",
          title: "Ivory Chicken Laps",
          description: "Our Ivory Chicken Laps are crafted from premium poultry, meticulously selected and processed to ensure the highest quality. These laps are perfect for creating rich, flavorful broths and soups. The bones have been expertly removed to provide a smooth, hearty consistency, making them an ideal choice for delicious and nutritious soups."
        },
        {
          imageSrc: require("@/assets/fpack.png"),
          altText: "Family Pack",
          title: "Family Pack",
          description: "Our family packs feature a selection of premium poultry products, including broiler meat, chicken fillets, and wings. Conveniently packaged to cater to your family's needs, each pack offers quality and value for everyday meals."
        },
        // {
        //   imageSrc: require("@/assets/green.jpg"),
        //   altText: "Family Pack",
        //   title: "Family Pack",
        //   description: "Our family packs feature a selection of premium poultry products, including broiler meat, chicken fillets, and wings. Conveniently packaged to cater to your family's needs, each pack offers quality and value for everyday meals."
        // },
        //  {
        //   imageSrc: require("@/assets/purple.jpg"),
        //   altText: "Family Pack",
        //   title: "Family Pack",
        //   description: "Our family packs feature a selection of premium poultry products, including broiler meat, chicken fillets, and wings. Conveniently packaged to cater to your family's needs, each pack offers quality and value for everyday meals."
        // },
        //  {
        //   imageSrc: require("@/assets/blue.jpg"),
        //   altText: "Family Pack",
        //   title: "Family Pack",
        //   description: "Our family packs feature a selection of premium poultry products, including broiler meat, chicken fillets, and wings. Conveniently packaged to cater to your family's needs, each pack offers quality and value for everyday meals."
        // },
        //  {
        //   imageSrc: require("@/assets/blue1.jpg"),
        //   altText: "Family Pack",
        //   title: "Family Pack",
        //   description: "Our family packs feature a selection of premium poultry products, including broiler meat, chicken fillets, and wings. Conveniently packaged to cater to your family's needs, each pack offers quality and value for everyday meals."
        // },
      ]
    };
  }
};
</script>

<style lang="scss">
.offers {
  text-align: center;
  padding: 1em;

  .offers-container {
    h1 {
      color: var(--primary-color);
      font-size: 3em;

      span {
        font-weight: lighter;
        color: blue;
      }
    }
    .bulk{
      color: var(--primary-color);
      font-weight: bold;
    }

    .product-table {
      text-align: left;
      margin-top: 1em;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));

      .prod1,
      .prod2,
      .prod3,
      .prod4,
      .prod5,
      .prod6,
      .prod7,
      .prod8,
      .prod9,
      .prod10,
      .prod11,
      .prod12,
      .prod13,
      .prod14 {
        display: grid;
        grid-template-columns: 1fr 3fr;

        div {
          margin-left: 1em;

          h3 {
            color: var(--primary-color);
          }
        }

        img {
          width: 90%;
          margin-top: 2em;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px){
     .offers .offers-container {
        p {
            padding: 0 3em;
            line-height: 2em;
        }

        .product-table {
            padding: 0 2em;

            div img {
                width: 100%;
                margin-left: 1em;
            }

            div p {
                margin-left: -3em;
                margin-bottom: 3em;
                width: 100%;
                font-size: .9em;
            }
        }
    }

}

@media only screen and (min-width: 1024px){
     .offers .offers-container{
        .we{
            padding: 0 10em;
        }
        .product-table {
           display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
        }
          
        
        
       
    }
}
</style>