<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 px-0 logoImageContainer">
          <img :src="require(`../../assets/image/logo/${logo}`)" class="logoImage">
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 pl-0 my-auto allIconsContainer">
        <div class="float-right">
          <h1 class="logoMainText" :style="'color:'+color">
            <span class="headerSpan">Light Up </span>
            <span>Your </span>
            <span style="font-weight: bold;">Brand </span>
            </h1>
          <div class="float-left">
            <span :class="index==0?'ml-0 pl-0 iconSpan':' px-0 iconSpan'"  v-for="(item, index) in icons_array" :key="index">
                <Icons 
                  :iconName="item" 
                  iconType="fab" 
                  :iconClass="'circle-icon logoIcons fa-1x '+(color=='white'?'logoIconsWhite':'logoIconsBlack')"
                />
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
<style scoped lang="scss">
    @import "../../assets/style/components/header/logo.scss";
    @import url('https://fonts.googleapis.com/css?family=Montserrat:200,400,700');
</style>


