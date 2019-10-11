<template>
    <div class="row">
        <image-background 
            imgUrl="print/1.png"
            opacity="1"
            :mHeader='{"text":"Printing","classes":"text-white text-center mainText"} '
            :sHeader='{"text":"The Best Quality Print is Here!", "classes":"text-white text-center subText"}'
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
    @import "../../assets/style/components/print/firstPart.scss";
</style>