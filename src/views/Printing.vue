<template>
  <div class="row" >
    <image-background 
      mHeader="Printing" 
      sHeader="The Best Quality Print is Here!" 
      imgUrl="print/1.png"
    ></image-background>
    <main-content></main-content>
  </div>
</template>
<script>
  import imageBackground  from '../components/general/imageBackground';
  import mainContent  from '../components/printing/main';
  export default {
    components:{
      imageBackground,
      mainContent
    }
  }
</script>