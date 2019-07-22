<template>
    <div class="container-fluid">
        <div class="row">
            Main Image
        </div>
        <div class="row my-2">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-3">
                <div class="row below">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pl-0 ml-0 mainContainer">
                    <div class="bottom-left">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                            <p class="text-white text-left pl-3 mb-0">See the Image  in 360 Panorama</p>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                            <div class="row float-right mr-1">
                              <div class="mr-3" v-for="(item, index) in icons_array" :key="index">
                                <Icons :iconName="item" iconType="fab" extraClass="" iconStyle="color:rgb(193, 39, 45);border: solid 2px rgb(193, 39, 45);" iconSize="sm" iconClass="circle-icon-small"/>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="top-left">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <p class="text-white text-left pl-3 mb-0">New Project</p>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                            <p class="text-white text-right mr-2 mb-0">Coca Cola Poster - Erbil 100 M St</p>
                          </div>
                        </div>
                    </div>
                    <b-carousel id="carousel-1" :interval="4000" controls background="#ababab" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                      <b-carousel-slide img-src="https://picsum.photos/1024/700/?image=54"></b-carousel-slide>
                      <b-carousel-slide img-src="https://picsum.photos/1024/700/?image=58"></b-carousel-slide>
                    </b-carousel>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                  </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-3">
                <div class="row below">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pl-0 ml-0 mainContainer">
                    <div class="bottom-left">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                            <p class="text-white text-left pl-3 mb-0">See the Image  in 360 Panorama</p>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                            <div class="row float-right mr-1">
                              <div class="mr-3" v-for="(item, index) in icons_array" :key="index">
                                <Icons :iconName="item" iconType="fab" extraClass="" iconStyle="color:rgb(193, 39, 45);border: solid 2px rgb(193, 39, 45);" iconSize="sm" iconClass="circle-icon-small"/>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="top-left">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <p class="text-white text-left pl-3 mb-0">New Project</p>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                            <p class="text-white text-right mr-2 mb-0">Coca Cola Poster - Erbil 100 M St</p>
                          </div>
                        </div>
                    </div>
                    <b-carousel id="carousel-1" :interval="4000" controls background="#ababab" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                      <b-carousel-slide img-src="https://picsum.photos/1024/700/?image=54"></b-carousel-slide>
                      <b-carousel-slide img-src="https://picsum.photos/1024/700/?image=58"></b-carousel-slide>
                    </b-carousel>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                  </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-3">
                <div class="row below">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pl-0 ml-0 mainContainer">
                    <div class="bottom-left">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                            <p class="text-white text-left pl-3 mb-0">See the Image  in 360 Panorama</p>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                            <div class="row float-right mr-1">
                              <div class="mr-3" v-for="(item, index) in icons_array" :key="index">
                                <Icons :iconName="item" iconType="fab" extraClass="" iconStyle="color:rgb(193, 39, 45);border: solid 2px rgb(193, 39, 45);" iconSize="sm" iconClass="circle-icon-small"/>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="top-left">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <p class="text-white text-left pl-3 mb-0">New Project</p>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                            <p class="text-white text-right mr-2 mb-0">Coca Cola Poster - Erbil 100 M St</p>
                          </div>
                        </div>
                    </div>
                    <b-carousel id="carousel-1" :interval="4000" controls background="#ababab" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                      <b-carousel-slide img-src="https://picsum.photos/1024/700/?image=54"></b-carousel-slide>
                      <b-carousel-slide img-src="https://picsum.photos/1024/700/?image=58"></b-carousel-slide>
                    </b-carousel>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                  </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-3">
                <div class="row below">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pl-0 ml-0 mainContainer">
                    <div class="bottom-left">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                            <p class="text-white text-left pl-3 mb-0">See the Image  in 360 Panorama</p>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                            <div class="row float-right mr-1">
                              <div class="mr-3" v-for="(item, index) in icons_array" :key="index">
                                <Icons :iconName="item" iconType="fab" extraClass="" iconStyle="color:rgb(193, 39, 45);border: solid 2px rgb(193, 39, 45);" iconSize="sm" iconClass="circle-icon-small"/>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="top-left">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <p class="text-white text-left pl-3 mb-0">New Project</p>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                            <p class="text-white text-right mr-2 mb-0">Coca Cola Poster - Erbil 100 M St</p>
                          </div>
                        </div>
                    </div>
                    <b-carousel id="carousel-1" :interval="4000" controls background="#ababab" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                      <b-carousel-slide img-src="https://picsum.photos/1024/700/?image=54"></b-carousel-slide>
                      <b-carousel-slide img-src="https://picsum.photos/1024/700/?image=58"></b-carousel-slide>
                    </b-carousel>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                  </div>
                </div>
            </div>
        </div>
        <div class="row">
          <containerCB>
            <h1 class="text-center text-white">OUR MISSION</h1>
            <img src="../../assets/logo1.png" class="" height="150px">
          </containerCB>
          <containerCB >
            <h1>Hello World2</h1>
          </containerCB>
        </div>
        <div class="row my-4 py-4">
            <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <h2 style="color:rgb(193, 39, 45);" class="text-right ">OUR CLIENTS</h2>
            </div>
            <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <div class="row">
                <div class="mx-xl-5 mx-lg-2 mx-md-1">
                  <Icons iconName="balance-scale-right" iconStyle="color:black;border: solid 0px white;" iconSize="5x" iconClass="circle-icon-large"/>                
                </div>
                <div class="mx-xl-4 mx-lg-2 ml-md-1">
                  <Icons iconName="baby-carriage" iconStyle="color:black;border: solid 0px white;" iconSize="5x" iconClass="circle-icon-large"/>
                </div>
                <div class="mx-xl-4 mx-lg-2 ml-md-1">
                  <Icons iconName="basketball-ball" iconStyle="color:black;border: solid 0px white;" iconSize="5x" iconClass="circle-icon-large"/>
                </div>
                <div class="mx-xl-4 mx-lg-2 ml-md-1">
                  <Icons iconName="car-side" iconStyle="color:black;border: solid 0px white;" iconSize="5x" iconClass="circle-icon-large"/>
                </div>
                <div class="mx-xl-5 mx-lg-2 ml-md-1">
                  <Icons iconName="cogs" iconStyle="color:black;border: solid 0px white;" iconSize="5x" iconClass="circle-icon-large"/>
                </div>
              </div>
              
            </div>
        </div>
        <div class="row">
          <containerIB imgUrL="home/5.png">
           <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Projects</h3>
                  <Icons iconName="sticky-note" iconType="far" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>
                  <h3 class="text-white pl-3">1200</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Rewards</h3>
                  <Icons iconName="award" extraClass="" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>
                  <h3 class="text-white pl-3">500</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Branchs</h3>
                  <Icons iconName="store" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>
                  <h3 class="text-white pl-3">4</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Staff</h3>
                  <Icons iconName="clipboard-list" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>              
                  <h3 class="text-white pl-3">132</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Happy Clients</h3>
                  <Icons iconName="address-book" iconType="far" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>
                  <h3 class="text-white">680</h3>
                </div>
              </div>
           </div>
          </containerIB>
        </div>
    </div>
</template>
<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Icons from '../ready/icons'
    import containerIB  from '../general/containerImageBackground';
    import containerCB  from '../general/containerColorBackground';
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
        containerIB,
        containerCB
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
    background-color:#222;
  }
</style>

