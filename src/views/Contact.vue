<template>
  <div class="row" >
    <image-background mHeader="Contact Us" sHeader="We will Serve you the Best"></image-background>
    <contact-container></contact-container>
  </div>
</template>
<script>
  import imageBackground  from '../components/general/imageBackground';
  import contactContainer  from '../components/contactus/contactContainer';
  export default {
    components:{
      imageBackground,
      contactContainer
    }
  }
</script>