<template>
    <div class="row my-2">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-3" >
            <div class="row below">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pl-0 ml-0 mainContainer">
                <div class="bottom-left">
                    <div class="row h-100">
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                        <p class="text-white text-left pl-3 mb-0" style="font-size:14px;">See the Image  in 360 Panorama</p>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto" >
                        <div class="row float-right mr-1">
                          <div class="mr-3" v-for="(item, index) in icons_array" :key="index">
                            <Icons :iconName="item" iconType="fab" extraClass="" iconStyle="color:white;border: solid 1px white;" iconSize="sm" iconClass="circle-icon logoStyle3"/>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="top-left">
                    <div class="row h-100">
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto mx-0">
                        <span class="text-white text-left pl-3 pl-lg-0 mb-0" style="font-size:16px;">New Project</span>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto mx-0" >
                        <span class="text-white text-right mr-2 mb-0" style="font-size:16px;">Coca Cola Poster - Erbil 100 M St</span>
                      </div>
                    </div>
                </div>
                <b-carousel id="carousel-1" :interval="4000" img-width="1024" img-height="480" controls background="#ababab" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                  <b-carousel-slide>
                    <img slot="img" class="w-100" height="390px;" src="../../assets/image/home/2.png" alt="image slot">
                  </b-carousel-slide>
                  <b-carousel-slide>
                    <img slot="img" class="w-100" height="390px;" src="../../assets/image/home/6.png" alt="image slot">
                  </b-carousel-slide>
                </b-carousel>
              </div>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-3">
            <div class="row below">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pl-0 ml-0 mainContainer">
                <div class="bottom-left">
                    <div class="row h-100">
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                        <p class="text-white text-left pl-3 mb-0" style="font-size:14px;">See the Image  in 360 Panorama</p>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto" >
                        <div class="row float-right mr-1">
                          <div class="mr-3" v-for="(item, index) in icons_array" :key="index">
                            <Icons :iconName="item" iconType="fab" extraClass="" iconStyle="color:white;border: solid 1px white;" iconSize="sm" iconClass="circle-icon logoStyle3"/>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="top-left">
                    <div class="row h-100">
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                        <p class="text-white text-left pl-3 mb-0" style="font-size:16px;">New Project</p>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto" >
                        <p class="text-white text-right mr-2 mb-0" style="font-size:16px;">Coca Cola Poster - Erbil 100 M St</p>
                      </div>
                    </div>
                </div>
                <video width="100%" height="390px;" controls>
                  <source src="../../assets/video/1.mp4" type="video/mp4">
                </video>

              </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Icons from '../general/icons'
    export default {
      data() {
        return {
          icons_array:["facebook-f","twitter","instagram","pinterest-p","youtube","vimeo-v"],
          slide: 0,
          sliding: null
        }
      },
      components:{
        Icons,
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
    .mainContainer {
        position: relative;
    }
    .bottom-left {
        position: absolute;
        bottom: 0px;
        left: 0px;
        z-index: 1000;
        color:white;
        opacity:0.8;
        width:calc(100% - 15px);
        height:30px;
        background-color:#222;
    }
    .top-left {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1000;
        color:black;
        opacity:0.8;
        width:calc(100% - 15px);
        height:30px;
        background-color:#222;
    }
</style>