<template>
    <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h4><ins>Follow Us </ins>on Socials</h4>
        </div>
      </div>
      <div class="row mt-3">
        <div class="mx-2 px-0" v-for="(item, index) in icons_array" :key="index">
          <Icons :iconName="item" iconType="fab" iconStyle="color:rgb(193, 39, 45);border: solid 3px rgb(193, 39, 45);" iconClass="circle-icon logoStyle1"/>
        </div>
      </div>
      <hr/>
      <div class="row mt-3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h4>Call Now</h4>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 my-3">
              <Icons iconName="phone-alt" iconStyle="color:rgb(193, 39, 45);" iconClass="" />
            </div>
            <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 float-left">
              <h5 >+964 (0) 750 155 1212</h5>
              <h5 >+964 (0) 770 155 1212</h5>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div class="row mt-3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h4>Email Us</h4>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
              <Icons iconName="at" iconStyle="color:rgb(193, 39, 45);" iconClass="" />
            </div>
            <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 my-1">
              <h5 class="float-left">citylight@info.com</h5>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
</template>
<script>
  import Icons from '../../general/icons'
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
    ins { 
      text-decoration:none;
      border-bottom: 2px solid red;
      padding-bottom: 5px;
    }
</style>
