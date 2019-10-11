<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 socialContainer">
        <div class="row">
          <div class="d-none d-md-block col-md-3 col-lg-3 col-xl-3 text-white text-center">
              _______________
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div class="row">
                  <div :class="'col-4 col-sm-4  col-md-2 col-lg-2 col-xl-2 text-center '+(index<3?'smallMarginSocial':'')" v-for="(item, index) in icons_array" :key="index">
                    <Icons 
                      :iconName="item" 
                      iconType="fab" 
                      iconClass="circle-icon logoIcons fa-1x" 
                    />
                  </div>
              </div>
          </div>
          <div class="d-none d-md-block col-md-3 col-lg-3 col-xl-3 text-white text-center">
              _______________
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
<style scoped lang="scss">
    @import "../../assets/style/components/footer/social.scss";
</style>
