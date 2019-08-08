<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " style="height:130px;">
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div class="row">
          <img :src="require(`../../assets/image/logo/${logo}`)" class="ml-4 my-3" height="90px" width="326px;">
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-auto">
        <div class="float-right pr-4">
          <h1 class="logo_style1" :style="'color:'+color">
            <span style="font-family: 'Montserrat','SF Pro Display';font-weight:200;">Light Up </span>
            <span>Your </span>
            <span style="font-weight: bold;">Brand </span>
            </h1>
          <div class="float-left">
            <span :class="index==0?'ml-0 pl-0':' px-0'" style="margin-right:9px;" v-for="(item, index) in icons_array" :key="index">
                <Icons :iconName="item" iconType="fab" :iconStyle="'color:'+color+';border: solid 3px '+color" iconClass="circle-icon logoStyle1"/>
            </span>
          </div>
        </div>
      </div>   
    </div>
  </div>
</template>
<script>
  import Icons from '../general/icons'
  export default {
    props: {
      color: {type: String,default:"black"},
      logo:  {type: String,default:"logo.png"},
    },
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
<style scoped>
    @import "../../style/components/header/logo.scss";
    @import url('https://fonts.googleapis.com/css?family=Montserrat:200,400,700');
</style>


