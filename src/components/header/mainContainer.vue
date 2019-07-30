<template>
    <div>
        <div v-if="getHomeNavbar" class="row">
          <logo color="black"></logo>
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
              <hNavbar ></hNavbar>
              <div class="h-25">
                <h1 class="text-white text-center pt-5" style="font-size:60px;">Light Up Advertising</h1>
                <h2 class="text-white text-center pt-2" style="font-size:60px;font-weight:900;">Your <span style="color:rgb(193, 39, 45);">Brand</span></h2>
              </div>
              <div class="baby text-white">
                  <h1>Hello World</h1>
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

  .baby {
      position: absolute;
      bottom: 0;
  }
</style>