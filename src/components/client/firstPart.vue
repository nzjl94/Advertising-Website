<template>
    <div class="row">
        <image-background 
          imgUrL="client/1.png"
          opacity="0.6"
          mHeader="Our Clients" 
          sHeader="We do Best, We made them Happy!"
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