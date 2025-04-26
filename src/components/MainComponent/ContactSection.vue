<template>
  <section class="contact-section">
        <div class="container">
            <div class="blog-section">
                <h2>Our Blog</h2>
              <div class="blogs">             
                  <div class="blog1">
                    <img src="@/assets/eggs.png" alt="image">
                    <div class="texts">
                      <h5>19 october 2021 </h5>
                      <h3>Egg preservation</h3>
                      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quod earum, ipsa, necessitatibus, quis voluptates dolor accusamus asperiores praesentium atque eligendi minus? Corrupti id nobis dignissimos, blanditiis qui voluptatum aperiam!
                      </p>
                      <p><a href="https://www.google.com">Read More</a></p>

                    </div>
                  </div>

                  
                  <div class="blog1">
                    <img src="@/assets/doc.png" alt="image">
                    <div class="texts">
                      <h5>19 September 2024 </h5>
                      <h3>DOC and Vaccinations</h3>
                      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quod earum, ipsa, necessitatibus, quis voluptates dolor accusamus asperiores praesentium atque eligendi minus? Corrupti id nobis dignissimos, blanditiis qui voluptatum aperiam!
                      </p>
                      <p><a href="">Read More</a></p>

                    </div>
                  </div>

                  <div class="blog1">
                    <img src="@/assets/ab2.png" alt="image">
                    <div class="texts">
                      <h5>1st January 2025 </h5>
                      <h3>Brooding best practices</h3>
                      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quod earum, ipsa, necessitatibus, quis voluptates dolor accusamus asperiores praesentium atque eligendi minus? Corrupti id nobis dignissimos, blanditiis qui voluptatum aperiam!
                      </p>
                      <p><a href="">Read More</a></p>

                    </div>
                  </div>
                
              </div>
            
              
               
            </div>
            <div class="contact-right">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15795.87047567758!2d4.7685479!3d8.2060107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037c726f8be2d85%3A0x15abe3b402eb6362!2sDayntee%20Farms%20Limited!5e0!3m2!1sen!2sng!4v1722000323274!5m2!1sen!2sng"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="address-line">
                <h2>Contact Information</h2>
                <div class="address">
                    <h5>Address</h5>
                    <p>Km 5 Ajase-ipo - Offa Road, Amberi village, Kwara state</p>
                </div>
                <div class="Contacts">
                    <h5>Contacts</h5>
                    <p>Email: info@daynteefarms.com</p>
                    <p>Mobile: +234 (904) 005 5555, +234 (904)0005037</p>

                </div>
                <div class="links">
                    <h5>Quick links</h5>
                    <div class="links-nav">
                        <a href="https://www.facebook.com/profile.php?id=61566666213217"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/daynteefarmsltd/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/watch?v=eFix_48PfKU"><i class="fa-brands fa-youtube"></i></a>
                        <a href=" https://www.linkedin.com/company/dayntee-farms-limited/?originalSubdomain=ng"><i
                                class="fa-brands fa-linkedin"></i></a>
                        <a href="https://https://x.com/Ivory_chicken"><i class="fa-brands fa-twitter"></i></a>
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
.blog_section{
  display: block;
}
.blogs{
display: grid;
grid-template-columns: auto;
.blog1{
  img{
    
  width:  80%;
  }
  .texts{
    margin-top: -2em;
    border: 1px solid rgb(190, 189, 189);
    width: 80%;
    border-bottom: 2px solid rgb(190, 189, 189);
    margin-bottom: 10px;
      box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);

    h3, p{
      margin-top: -1em;
    }
    p{
      font-size: .7em;
      line-height: 1.2em;
      margin-top: 10px;
    }
  }
}

}
    .contact-section {
  padding: 0.5em 1em;
}

.contact-section h2 {
  font-size: 2em;
}

.contact-section label {
  display: block;
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.contact-section input,
.contact-section textarea {
  width: 100%;
  padding: 0.8em;
  margin-bottom: 1em;
  border-radius: 0.3em;
  border: 1px solid gray;
  box-sizing: border-box;
}

.contact-section input[type=submit] {
  background-color: var(--primary-color);
  color: white;
  font-weight: bold;
  font-size: 1.3em;
  border: none;
  margin-bottom: 5em;
  border-radius: 5em;
  display: inline-block;
  padding: 0.8em 2em;
  width: unset;
}

iframe {
  width: 100%;
  height: 300px;
}

.contact-right {
  border-bottom: 2px solid #CA0407;
}
.address-line h5{
  color: var(--primary-color);
}

.links a {
  margin-right: 10px;
  text-decoration: none;
  margin-bottom: 10px;
  color: #CA0407;
}
@media only screen and (min-width: 768px){
  .blogs{
     display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));

  }
  .address-line {
  h5 {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
}

.links {
  //text-align: center;
  .links-nav {
    

    margin-top: -10px;

    a {
      cursor: pointer;
      margin-right: 20px;
      font-size: 1.5em;
    }
  }
}

}
@media only screen and (min-width: 1024px){
  .contact-section {
        position: relative;


    }
    .contact-left{
      text-align: left;
    }
    .blog-section{
      text-align: center;
      
       .blog1{
        width: 80%;
        .texts{
          width: 80%;
        }
       }
    }

    .contact-right {
        // position: absolute;
        // right: 0;
        // top: 0;
        // width: 45%;
        // height: 100%;
        // border-left: 5px solid #CA0407;



        iframe {
          text-align: center;
            height: 100%;
        }


    }

    .address-line {
      text-align: center;
        h5 {
            font-size: 1em;
           // text-align: left;
        }

        p {
            font-size: 0.8em;
        }

        i {
            font-size: 1em;
        }
    }
}



</style>