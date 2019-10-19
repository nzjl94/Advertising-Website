<template>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 firstColumn">
          <first-style 
              showIcon="true"
              design='bottomStyle bottomStyleX' 
              :text1='{"class":"slideGeneral firstSlideButtom","text":"See the Image  in 360 Panorama"}' 
              :icons='{"classItem":"iconsItem","classContainer":"iconsContainer","show":true}' 
          ></first-style>
          <first-style 
              showIcon="true"
              design='topStyle topStyleX' 
              :text1="{'class':'slideGeneral firstSlideTopLift','text':'New Project'}" 
              :text2="{'class':'slideGeneral firstSlideTopRight','text':'Coca Cola Poster - Erbil 100 M St'}"
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
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 secondColumn" >
          <first-style 
              showIcon="true"
              design='topStyleVideo topStyleVideoX' 
              :text1="{'class':'slideGeneral firstSlideTopLift','text':'New Project'}" 
              :text2="{'class':'slideGeneral firstSlideTopRight','text':'Coca Cola Poster - Erbil 100 M St'}"
          ></first-style>
          <div class="video-container h-100">
            <video  loop controls id="video-bg">
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
<style  lang="scss" scoped>
    @import "../../assets/style/components/home/secondPart.scss";
</style>