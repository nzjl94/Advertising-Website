<template>
    <div class="row my-1">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  p-0 m-0 pr-1" >
          <first-style 
              showIcon="true"
              :design='{"bottom":"0px","left":"0px","color":"white"}' 
              :text1='{"class":"text-white text-left pl-3 mb-0","style":"font-size:14px;","text":"See the Image  in 360 Panorama"}' 
          ></first-style>
          <first-style 
              showIcon="true"
              :design='{"top":"3px;","left":"0px;","color":"black"}' 
              :text1="{'class':'text-white text-left pl-3 mb-0','style':'font-size:16px;','text':'New Project'}" 
              :text2="{'class':'text-white mr-2 mb-0','style':'font-size:16px;float:right;','text':'Coca Cola Poster - Erbil 100 M St'}"
          ></first-style>
          <b-carousel id="carousel-1" :interval="4000" controls background="white" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide class="w-100">
              <img slot="img"  class="w-100 h-100 m-0 p-0" src="../../assets/image/home/3.png" alt="image slot">
            </b-carousel-slide>
            <b-carousel-slide class="w-100">
              <img slot="img"  class="w-100 h-100 m-0 p-0" src="../../assets/image/home/3.png" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  p-0 m-0 pl-1">
          <first-style 
              :design='{"bottom":"0px","left":"0px","color":"white"}' 
              :text1="{'class':'text-white text-left pl-3 mb-0','style':'font-size:14px;','text':'See the Image  in 360 Panorama'}" 
          ></first-style>
          <first-style 
              showIcon="true"
              :design='{"top":"0px;","left":"0px;","color":"black"}' 
              :text1="{'class':'text-white text-left pl-3 pl-lg-0 mb-0','style':'font-size:16px;','text':'New Project'}" 
              :text2="{'class':'text-white mr-2 mb-0','style':'font-size:16px;float:right;','text':'Coca Cola Poster - Erbil 100 M St'}"
          ></first-style>

          <div class="video-container">
            <video  loop controls>
              <source src="../../assets/video/1.mp4" type="video/mp4">
            </video>
          </div>
          
        </div>
    </div>
</template>
<script>
    import firstStyle from './headers/style1'
    export default {
      data() {
        return {
          slide: 0,
          sliding: null
        }
      },
      components:{
        firstStyle
      },
      methods: {
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
      }
    }
</script>
<style scoped>
  .video-container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%; 
    overflow: hidden;
  }
  .video-container video {
      min-width: 100%; 
      min-height: 100%; 
      width: auto;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
  }
</style>