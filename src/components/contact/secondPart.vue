<template>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h3 class="text-center" >
                  <ins>Get in Touch</ins>
                </h3>
                <p class="text-center">
                  We are available 24/7 by fax, e-mail, or by phone. You can also use our quick contack form to ask a 
                  question about our services and projects.
                </p>
            </div>
            <contact-form></contact-form>
          </div>
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
<style scoped>
    ins { 
      text-decoration:none;
      border-bottom: 2px solid red;
      padding-bottom: 5px;
    }
</style>