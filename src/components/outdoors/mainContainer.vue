<template>
    <div class="container-fluid">
        <div class="row">
            Main Image
        </div>
        <div class="row">
            First Slide
        </div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-1">
                <div class="row below">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mainContainer">
                      <div class="bottom-left">Bottom Left</div>
                      <div class="top-left">Top Left</div>
                    <b-carousel
                      id="carousel-1"
                      v-model="slide"
                      :interval="4000"
                      controls
                      indicators
                      background="#ababab"
                      style="text-shadow: 1px 1px 2px #333;"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
                    >
                     <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                        <h1>Hello world!</h1>
                      </b-carousel-slide>
                      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
                      <b-carousel-slide>
                        <img
                          slot="img"
                          class="d-block img-fluid w-100"
                          width="1024"
                          height="480"
                          src="https://picsum.photos/1024/480/?image=55"
                          alt="image slot"
                        >
                      </b-carousel-slide>

                    </b-carousel>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                  </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-1 mx-0">
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                 <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                  </b-carousel-slide>
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
                  <b-carousel-slide>
                    <img
                      slot="img"
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="https://picsum.photos/1024/480/?image=55"
                      alt="image slot"
                    >
                  </b-carousel-slide>

                </b-carousel>
            </div>
        </div>
        <div class="row">
            General Text
        </div>
        <div class="row">
            Icons Part
        </div>
        <div class="row">
            Last Part
        </div>
    </div>
</template>
<script>
    export default {
        data() {
          return {
            slide: 0,
            sliding: null
          }
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
    text-align: center;
    color: white;
  }
  .bottom-left {
    position: absolute;
    bottom: 2px;
    left: 16px;
    z-index: 1000;
    color:white;
    opacity:0.3;
    width:95%;
    background-color:black;
  }
  .top-left {
    position: absolute;
    top: 2px;
    left: 16px;
    z-index: 1000;
    color:black;
    opacity:0.8;
    width:95%;
    background-color:#eeeeee;
  }
</style>

