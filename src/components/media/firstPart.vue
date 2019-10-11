<template>
    <div class="row">
        <image-background 
          imgUrL="media/1.png"
          opacity="1"
          :mHeader='{"text":"Media Advertising","classes":"text-white text-center mainText"} '
          :sHeader='{"text":"Share Your Business Like never before!", "classes":"text-white text-center subText"}'
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
  @import "../../assets/style/components/media/firstPart.scss";
</style>