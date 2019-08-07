<template>
    <div>
        <div v-if="getHomeNavbar" class="row">
          <logo color="black" logo="blackLogo.png"></logo>
          <hNavbar ></hNavbar>
        </div>
        <div class="row"  v-else>
            <containerIB 
                imgUrL="home/3.png"
                grid="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0"
                height="740px"
                opacity="0.4"
            >
              <logo color="white"></logo>
              <hNavbar homeToggle="getHomeNavbar"></hNavbar>
              <div class="h-25">
                <h1 class="text-white text-center pt-5" style="font-size:60px;">Light Up Advertising</h1>
                <h2 class="text-white text-center pt-2" style="font-size:60px;font-weight:bold;">Your <span style="color:rgb(193, 39, 45);">Brand</span></h2>
              </div>
              <div class="beloDiv text-white w-100 px-4" style="height:130px;">
                  <h2 class="ml-3 mt-3" style="font-size:24px;">Why use Outdoor ?</h2>
                  <div class="row h-100 w-100 mb-2">
                    <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                      <h4 class="mx-3" style="font-size:24px;">
                        Our ultimate goad and passion are about helping brands to meet the ever-shifting needs of communicates and cultures
                      </h4>
                    </div>
                    <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mx-auto mt-0">
                      <b-button type="submit" variant="outline-light" style="font-size:18px;border-radius:10px;display:inline;width:138px;height:44px;float:right;margin-right:10px;">
                          Learn More
                      </b-button>
                    </div>
                  </div>
              </div>

            </containerIB>
        </div>
        
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    import logo from "./logo";
    import hNavbar from "./navbar";
    import containerIB  from '../general/containerImageBackground';
    export default {
      data() {
        return {
          
        }
      },
      components:{
        logo,
        hNavbar,
        containerIB
      },
      computed:{
        ...mapGetters([
          'getHomeNavbar'
        ])
      }
    }
</script>
<style scoped>
  .beloDiv {
      position: absolute;
      bottom: 0;
      background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
  }
</style>