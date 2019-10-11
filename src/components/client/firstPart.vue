<template>
    <div class="row">
        <image-background 
          imgUrL="client/1.png"
          opacity="1"
          :mHeader='{"text":"Our Clients","classes":"text-white text-center mainText"} '
          :sHeader='{"text":"We do Best, We made them Happy!", "classes":"text-white text-center subText"}'
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
  @import "../../assets/style/components/client/firstPart.scss";
</style>