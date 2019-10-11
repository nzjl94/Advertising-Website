<template>
    <div class="row">
        <image-background 
          imgUrL="client/2.png"
          opacity="1"
          :mHeader='{"text":"How can We help you?","classes":"text-white text-center mainText"}'
          :bHeader='{"text":"Lets Talk","classes":"mx-auto d-block subText"}'
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
  @import "../../assets/style/components/client/fourthPart.scss";
</style>