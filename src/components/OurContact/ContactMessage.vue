<template>
   <section class="message">
        <h1>SEND US A MESSAGE</h1>
        <form>
           <div>
            <input type="text" name="name" placeholder="Your Name">
            <input type="email" name="email" placeholder="Your Email">
            <input type="text" name="phone" placeholder="Your Phone Number">
            <input type="text" name="State" placeholder="Your State">
           </div>
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>

        </form>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.message {
    background: #E0DEDE;
    // border-bottom: 1px solid var(--primary-color);
    padding-bottom: 3.5em;

    h1 {
        text-align: center;
        font-size: 2em;
        color: var(--primary-color);
    }

    form {
        input {
            display: block;
            margin-bottom: 1em;
            border: none;
            width: 100vw;
            padding: 1em 0.5em;
        }

        textarea {
            height: 8em;
            width: 100vw;
            padding: 1em 0.5em;
            margin-bottom: 2em;
            border: none;
        }

        button {
            padding: 1em;
            border-radius: 40px;
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            font-size: 15px;
            font-weight: bold;
            box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);
        }
    }
}

@media only screen and (min-width: 768px){
     .message form{
    button{
        padding: 1em 2em;
    }
   }
}

@media only screen and (min-width: 1024px){
    .message{
    padding: 1em 4em;
   
}
.message form {
    div {
            display: grid;
            grid-template-columns: auto auto;
    
            input {
                width: 40vw;
                margin-bottom: 2em;
            }
        }
        textarea{
            width: 84vw;
            margin-left: -2em;
        }
}

}

@media only screen and (min-width:1250px){
    .message form {
            margin: 0 10em;
            div {
                display: grid;
                grid-template-columns: auto auto;
                
    
                input {
                    width: 30vw;
                    margin-bottom: 2em;
                }
            }
    
            textarea {
                width: 62vw;
            }
        }
}


</style>