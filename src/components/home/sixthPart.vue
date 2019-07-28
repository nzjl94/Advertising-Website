<template>
    <div class="row">
       <containerIB imgUrL="home/5.png">
           <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Projects</h3>
                  <Icons iconName="sticky-note" iconType="far" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>
                  <h3 class="text-white pl-3">1200</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Rewards</h3>
                  <Icons iconName="award" extraClass="" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>
                  <h3 class="text-white pl-3">500</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Branchs</h3>
                  <Icons iconName="store" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>
                  <h3 class="text-white pl-3">4</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Staff</h3>
                  <Icons iconName="clipboard-list" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>              
                  <h3 class="text-white pl-3">132</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white">Happy Clients</h3>
                  <Icons iconName="address-book" iconType="far" iconStyle="color:white;border: solid 3px white;" iconSize="5x" iconClass="circle-icon-large"/>
                  <h3 class="text-white">680</h3>
                </div>
              </div>
           </div>
          </containerIB>
    </div>
</template>
<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Icons from '../general/icons'
    import containerIB  from '../general/containerImageBackground';
    export default {
      data() {
        return {
          icons_array:["facebook-f","twitter","instagram","pinterest-p","youtube","vimeo-v"]
        }
      },
      components:{
        Icons,
        containerIB
      },
    }
</script>
<style scoped>
   
</style>