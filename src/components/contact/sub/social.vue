<template>
  <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
      <h4 class="contactMainStyle1"><ins>Follow Us </ins>on Socials</h4>
      <div class="socialContainer">
        <div class="subContainer" v-for="(item, index) in icons_array" :key="index">
                  <Icons 
                      :iconName="item" 
                      iconType="fab" 
                      iconClass="circle-icon logoIcons fa-1x"
                  />
        </div>
      </div>
      <hr/>
      <div class="contactInfo">
          <h4 class="contactMainStyle1">Call Now</h4>
          <div class="phoneText" style="display: flex;justify-content: left;align-items: center;">
              <div class="" style="margin-right:20px;">
                  <Icons iconName="phone-alt" iconClass="fa-2x" />
              </div>
              <div class="">
                  <h5 class="contactMainStyle2">+964 (0) 750 155 1212</h5>
                  <h5 class="contactMainStyle2">+964 (0) 770 155 1212</h5>
              </div>
          </div>
          <hr/>
          <h4 class="contactMainStyle1">Email Us</h4>
          <div class="emailText" style="display: flex;justify-content: left;align-items: center;">
            <div class="" style="margin-right:20px;">
                <Icons iconName="at" iconClass="fa-2x" />
            </div>
            <div class="">
                <h5 class="contactMainStyle2">citylight@info.com</h5>
            </div> 
          </div>
          <hr/>
      </div>
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
<style  lang="scss" scoped>
  @import "../../../assets/style/components/contact/social.scss";
</style>
