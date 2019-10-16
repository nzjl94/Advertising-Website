<template>
    <div class="row">
        <image-background 
          opacity="1"
          imgUrL="contact/1.png"
          :mHeader='{"text":"Contact Us","classes":"text-white text-center mainText"} '
          :sHeader='{"text":"We will Serve you the Best", "classes":"text-white text-center subText"}'
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
<style  lang="scss" scoped>
  @import "../../assets/style/components/contact/firstPart.scss";
</style>