<template>
    <div class="row">
        <image-background 
          :key=getClintHeaderData.link
          :imgUrL=getClintHeaderData.link
          opacity="1"
          :mHeader='{"text":getClintHeaderData.title,"classes":"text-white text-center mainText"} '
          :sHeader='{"text":getClintHeaderData.content, "classes":"text-white text-center subText"}'
        ></image-background>
    </div>
    
</template>
<script>
  import {mapGetters} from 'vuex'
  import imageBackground  from '../general/imageBackground';
  export default {
    created() {
    },
    methods: {
      
    },
    components:{
      imageBackground,
    },
    computed:{
        ...mapGetters([
          'getClintHeaderData'
        ])
    }
  }
</script>
<style  lang="scss" scoped>
  @import "../../assets/style/components/client/firstPart.scss";
</style>