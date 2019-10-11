<template>
    <div class="row">
        <image-background 
          imgUrL="about/3.png"
          opacity="0.85"
          :mHeader="mHeader"
          :sHeader="sHeader" 
        ></image-background>
    </div>
    
</template>
<script>
  import imageBackground  from '../general/imageBackground';
  export default {
    components:{
      imageBackground,
    },
    data() {
      return {
          mHeader:{
              "text":"About Us",
              "classes":"text-white text-center mHeader"
          },
          sHeader:{
              "text":"We create Unique and Creative",
              "classes":"text-white text-center sHeader"
          } 
      }
    }
  }
</script>
<style  lang="scss" scoped>
  @import "../../assets/style/components/about/aboveImage.scss";
</style>