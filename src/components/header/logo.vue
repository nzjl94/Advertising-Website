<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div class="row">
          <!-- <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 text-right ">
              <Icons iconName="twitter" iconType="fab" iconClass="" iconSize="4x" />
          </div>
          <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 ml-0 pl-0">
              <h1 class="mb-0 pb-0 text-left">CITY LIGHT</h1>
              <p class="mt-0 pt-0 text-left">Advertising AND MEDIA</p>
          </div> -->
          <img src="../../assets/logo1.png" class="" height="150px">


        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div class="float-right pr-4">
          <h1>Light Up Your Brand</h1>
          <div class="row">
              <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 mx-0 px-0" v-for="(item, index) in icons_array" :key="index">
                  <Icons :iconName="item" iconType="fab"/>
              </div>
            </div>
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
        icons_array:["facebook-f","twitter","instagram","pinterest-p","youtube","vimeo-v"]
      }
    },
    components:{
      Icons
    }

  }
</script>

