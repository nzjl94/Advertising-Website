<template>
    <div class="row">
       <containerIB imgUrL="home/5.png">
           <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white style1 pb-3">Projects</h3>
                  <Icons iconName="sticky-note" iconType="far" iconStyle="color:white;border: solid 3px white;" iconSize="3x" iconClass="circle-icon logoStyle4"/>
                  <h3 class="text-white pt-3 style1">1200</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white style1 pb-3">Rewards</h3>
                  <Icons iconName="award" extraClass="" iconStyle="color:white;border: solid 3px white;" iconSize="3x" iconClass="circle-icon logoStyle4"/>
                  <h3 class="text-white style1 pt-3">500</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white style1 pb-3">Branchs</h3>
                  <Icons iconName="store" iconStyle="color:white;border: solid 3px white;" iconSize="3x" iconClass="circle-icon logoStyle4"/>
                  <p class="text-white style1 pt-3">4</p>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white style1 pb-3">Staff</h3>
                  <Icons iconName="clipboard-list" iconStyle="color:white;border: solid 3px white;" iconSize="3x" iconClass="circle-icon logoStyle4"/>              
                  <h3 class="text-white style1 pt-3">132</h3>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div class="text-center">
                  <h3 class="text-white style1 pb-3">Happy Clients</h3>
                  <Icons iconName="address-book" iconType="far" iconStyle="color:white;border: solid 3px white;" iconSize="3x" iconClass="circle-icon logoStyle4"/>
                  <h3 class="text-white style1 pt-3">680</h3>
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
   .style1{
     font : 20px "SF Pro Display"
   }
</style>