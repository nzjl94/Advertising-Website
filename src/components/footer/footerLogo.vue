<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pb-4 pt-2" style="background-color:#c1272d;">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right">
              <Icons iconName="twitter" iconType="fab" iconStyle="color:white" iconClass="" iconSize="4x" />
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0">
              <h1 class="mb-0 pb-0 text-white text-left">CITY LIGHT</h1>
              <p class="mt-0 pt-0 text-white text-left">Advertising AND MEDIA</p>
          </div>
        </div>
    </div>
</template>
<script>
  import '@fortawesome/fontawesome-free/css/all.css'
  import Icons from '../ready/icons'
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
<style scoped>

</style>
