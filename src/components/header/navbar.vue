<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-sm-0">
    <b-navbar toggleable="lg" class="py-0 px-0" style=" height: 60px;background:linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))">
      <b-navbar-brand to="/" v-if="homeToggle=='false'" class="pl-4 d-none d-lg-block">
        <Icons iconName="home" iconType="fa" iconClass="" />
      </b-navbar-brand>
      <b-navbar-toggle class="mx-auto" target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav justified class="w-100 py-2">
          <b-nav-item class="navbar_style1  d-block d-lg-none" to="/" >Home</b-nav-item>
          <b-nav-item class="navbar_style1" to="/outdoor" >Outdoors</b-nav-item>
          <b-nav-item class="navbar_style1" to="/about" >About Us</b-nav-item>
          <b-nav-item class="navbar_style1" to="/transit">Transit Ad</b-nav-item>
          <b-nav-item class="navbar_style1" to="/design">Designing</b-nav-item>
          <b-nav-item class="navbar_style1" to="/print">Printing</b-nav-item>
          <b-nav-item class="navbar_style1" to="/media">Media</b-nav-item>
          <b-nav-item class="navbar_style1" to="/client">Our Clients</b-nav-item>
          <b-nav-item class="navbar_style1" to="/contact">Contact Us</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import Icons from '../general/icons'
  export default {
    components:{
      Icons
    },
    props:{
      homeToggle:{type:String,default:"false"}
    }

  }
</script>
<style scoped>
  @import "../../assets/style/components/header/navbar.scss";
  .nav-link{
      color:black!important;
      font-weight: bold;
  }
</style>