<template>
    <div class="row">
        <image-background 
          imgUrL="client/2.png"
          opacity="0.8"
          mHeader="How can We help you?" 
          bHeader="Let's Talk" 
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