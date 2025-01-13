<template>
   <section class="texts">
        <h2>Join Dayntee Teams</h2>
        <div>
            <p>
           
            
            At Dayntee Farms, we are dedicated to excellence in poultry farming and strive to create a positive and dynamic work
            environment. Although we are not currently recruiting, we encourage you to check back regularly for future
            opportunities.
        
          </p>
          <p> If you are passionate about the agricultural sector and would like to be considered for future positions, please feel
            free to send your resume and cover letter to <span>info@dayntee.com</span> or fill out the employment form <a href="https://form.jotform.com/242105161908551">here</a>. We will keep your information on file and reach out
            when suitable openings become available.
            
            Thank you for your interest in joining our team!
        </p>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .texts{
        text-align: justify;
        line-height: 1.5em;
    padding: 1em 2em;

    span, a{
        color: var(--primary-color);
        font-weight: bold;
        text-decoration: none;
    }
}

@media only screen and (min-width: 1024px)
{
    .texts{
        padding: 2em 4em;
    }
}
@media only screen and (min-width: 1250px){
    .texts{
        padding: 1em 4em;
        h2{
            text-align: center;
        }

        div{
            display: grid;
            grid-template-columns: 50% 50%;

            p{
                padding: 0 2em;
            }
        }
    }
}
</style>