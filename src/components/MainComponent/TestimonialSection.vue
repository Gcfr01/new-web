<template>
  <section class="testimonial-section">
    <div class="container">
      <ul class="tools">
        <li>
          <img src="@/assets/process.png" alt="person">
          <h3>DFL Day old Vacinnation Room</h3>
        </li>
        
        <li>
          <img src="@/assets/staff4.png" alt="person">
          <h3>DFL Operator</h3>
        </li>
        
        <li>
          <!-- <img src="@/assets/farm-environ.png" alt="person"> -->
           <img src="@/assets/hatchery1.png" alt="">
          <div>
            <h3>Our DFL Hatchery</h3>
          </div>
        </li>
        <li>
          <img src="@/assets/001.png" alt="person">
          <h3>Our EC House</h3>
        </li>
        <li>
          <img src="@/assets/doc1.png" alt="person">
          <h3>DFL Breeds</h3>
        </li>
        <li>
          <img src="@/assets/vertical.png" alt="person">
          <h3>DFL Breeders</h3>
        </li>
        <li>
          <img src="@/assets/002.png" alt="person">
          <h3>DFL Processing Unit</h3>
        </li>
        <li>
          <img src="@/assets/silo.png" alt="person">
          <h3>DFL Feed Storage Silo</h3>
        </li>
        <li>
          <img src="@/assets/003.png" alt="person">
          <h3>Our Hatchery Unit</h3>
        </li>
        
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialSection'
}
</script>

<style lang="scss">
.testimonial-section {
  background: var(--primary-color);
  color: white;
  border-bottom: 1px solid #CA0407;
  max-width: 100vw;
}

.testimonial-section ul {
  display: grid;
  //margin-right: 3em;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
}

.testimonial-section li {
  //background: #CA0407;
  text-align: center;
  padding: .5em;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 1em;
}

.testimonial-section li img {
  width: 90%;
  height: auto;
  display: block;
  border-radius: 5%;
}
@media only screen and (min-width: 1024px){
  .testimonial-section{
    width: 98vw;
    margin-left: 0;
  }
  
}

</style>
.testi