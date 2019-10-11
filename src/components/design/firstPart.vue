<template>
    <div class="row">
        <image-background 
          imgUrL="design/2.png"
          opacity="1"
          :mHeader='{"text":"Designing","classes":"text-white text-center mainText"} '
          :sHeader='{"text":"Designing your Business will be Easy with Us!", "classes":"text-white text-center subText"}'
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
  @import "../../assets/style/components/design/firstPart.scss";
</style>