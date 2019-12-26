<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 socialContainer">
        <div class="row">
          <div class="d-none d-md-block col-md-3 col-lg-3 col-xl-3 text-white text-center">
              _________________________
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <Icons v-for="(item, index) in icons_array" :key="index" :iconName="item" iconType="fab" iconClass="circle-icon logoIcons whiteStyle fa-1x" />
          </div>
          <div class="d-none d-md-block col-md-3 col-lg-3 col-xl-3 text-white text-center">
              _________________________
          </div>  
        </div>
    </div>
</template>
<script>
  import Icons from '../general/icons'
  export default {
    data() {
      return {
        icons_array:["facebook-f","instagram","linkedin-in"]
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
