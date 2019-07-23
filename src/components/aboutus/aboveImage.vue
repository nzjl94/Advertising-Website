<template>
    <div class="row">
        <image-background 
          imgUrL="about/3.png"
          opacity="0.6"
          mHeader="About Us" 
          sHeader="We create Unique and Creative" 
        ></image-background>
    </div>
    
</template>
<script>
  import imageBackground  from '../general/imageBackground';
  export default {
    components:{
      imageBackground,
    }
  }
</script>