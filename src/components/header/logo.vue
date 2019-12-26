<template>
  <div class="mainContainer" :style="'background:'+background">
    <div class="subContainers subContainerOwn">
        <img :src="require(`../../assets/image/logo/${logo_left}`)" class="leftLogoImage">
    </div>
    <div class="subContainers subContainerTwo">
        <img :src="require(`../../assets/image/logo/${logo_right}`)" class=" rightLogoImage">
        <div class="iconContainer text-right">
          <Icons  v-for="(item, index) in icons_array" :key="index" :iconName="item" iconType="fab" 
          :iconClass="'circle-icon logoIcons fa-1x '+(logoColor=='black'?' blackStyle ':' whiteStyle ')" />
        </div>
    </div>   
  </div>
</template>
<script>
  import Icons from '../general/icons'
  export default {
    props: {
      background: {type: String,default:"black"},
      logoColor: {type: String,default:"black"},
      logo_left:  {type: String,default:"logo.png"},
      logo_right:  {type: String,default:"lightLogo2.png"},
    },
    data() {
      return {
        icons_array:["facebook-f","twitter","linkedin-in"]
      }
    },
    components:{
      Icons
    }
  }
</script>
<style scoped lang="scss">
    @import "../../assets/style/components/header/logo.scss";
</style>


