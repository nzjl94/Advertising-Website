<template>
    <div class="sliderMainContainer" >
        <div class="slideTextContainer" >
          <h2 style="color:rgb(193, 39, 45);" class="mainText">OUR CLIENTS</h2>
        </div>
        <div class="slideImageContainer" >
              <slick ref="slick" :options="slickOptions">
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/3.png" alt="">
                  </div>
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/2.png" alt="">
                  </div>
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/3.png" alt="">
                  </div>
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/4.png" alt="">
                  </div>
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/3.png" alt="">
                  </div>
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/2.png" alt="">
                  </div>
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/3.png" alt="">
                  </div>
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/4.png" alt="">
                  </div>
                  <div class="imageSlide" >
                      <img src="../../assets/image/home/icons/3.png" alt="">
                  </div>
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/2.png" alt="">
                  </div>
                  <div class="imageSlide"  >
                      <img src="../../assets/image/home/icons/3.png" alt="">
                  </div>
              </slick>
        </div>
    </div>
</template>
<script>
    import Slick from 'vue-slick';
    import '../../../node_modules/slick-carousel/slick/slick.css';
    import '../../../node_modules/slick-carousel/slick/slick-theme.css';
   export default {
      name: 'slick-slider',
      data() {
        return {
          slickOptions: {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:true,
            responsive: [{
               breakpoint: 1024,
               settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1,
               }
             },{
               breakpoint: 768,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
               }
             },{
               breakpoint: 320,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
               }
             }
            ]
          }
        }
      },
      methods: {
        next() {
          this.$refs.slick.next()
        },
        prev() {
          this.$refs.slick.prev()
        },
        reInit() {
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
      },
      components:{
        Slick
      },
    }
</script>
<style scoped lang="scss"> 
    @import "../../assets/style/components/home/fifthPart.scss";
</style>