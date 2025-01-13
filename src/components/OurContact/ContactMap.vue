<template>
  <section class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15795.87047567758!2d4.7685479!3d8.2060107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037c726f8be2d85%3A0x15abe3b402eb6362!2sDayntee%20Farms%20Limited!5e0!3m2!1sen!2sng!4v1722000323274!5m2!1sen!2sng"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.map {
    width: 100vw;
    border: 1px solid var(--primary-color);

    iframe{
        width: 100vw;
    }
}
@media only screen and (min-width: 1250px){
   
}
</style>