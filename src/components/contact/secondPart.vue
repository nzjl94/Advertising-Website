<template>
    <div class="row mainContainer">
      <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          <h3 class="formheaderText" >
            <ins>Get in Touch</ins>
          </h3>
          <p class="contactSubText">
            We are available 24/7 by fax, e-mail, or by phone. You can also use our quick contack form to ask a 
            question about our services and projects.
          </p>
          <contact-form></contact-form>
      </div>
      <social></social>
    </div>
</template>
<script>
    import contactForm  from './sub/contactForm';
    import social  from './sub/social';
    export default {
      data() {
        return {
        }
      },
      components:{
        contactForm,
        social
      }
    }
</script>
<style  lang="scss" scoped>
  @import "../../assets/style/components/contact/secondPart.scss";
</style>