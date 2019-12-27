<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-sm-0 mainNavbar">
    <b-navbar toggleable="lg"  class="py-0 px-0" 
      :variant="logoColor!='white'?'light':'dark'" :type="logoColor!='white'?'light':'dark'">
      <b-navbar-brand to="/" v-if="homeToggle=='false'" class="pl-4 d-none d-lg-block">
        <Icons iconName="home" iconType="fa" iconClass="" />
      </b-navbar-brand>
      <b-navbar-toggle class="mx-auto" target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav  :justified="smallScreen" class="w-100 py-2 mx-md-auto" >
          <b-nav-item class="navbar_style1  d-block d-lg-none" to="/" >Home</b-nav-item>
          <b-nav-item-dropdown  class="navbar_style1" >
            <template v-slot:button-content>
              <span :class="logoColor=='white'?'whiteColorNavbar':'blackColorNavbar'">Outdoor</span>
            </template>
            <b-dropdown-item class="overflow">
              City Light
              <b-list-group class="absolute">
                <b-list-group-item to="/outdoor">Erbil</b-list-group-item>
                <b-list-group-item to="/outdoor">Sulaimanyah</b-list-group-item>
                <b-list-group-item to="/outdoor">Kirkuk</b-list-group-item>
              </b-list-group>
            </b-dropdown-item>
            <b-dropdown-item class="overflow">
              BillBoard
              <b-list-group class="absolute">
                <b-list-group-item to="/outdoor">Erbil</b-list-group-item>
                <b-list-group-item to="/outdoor">Sulaimanyah</b-list-group-item>
                <b-list-group-item to="/outdoor">Kirkuk</b-list-group-item>
              </b-list-group>
            </b-dropdown-item>
            <b-dropdown-item class="overflow">
              Pissa
              <b-list-group class="absolute">
                <b-list-group-item to="/outdoor">Erbil</b-list-group-item>
                <b-list-group-item to="/outdoor">Sulaimanyah</b-list-group-item>
                <b-list-group-item to="/outdoor">Kirkuk</b-list-group-item>
              </b-list-group>
            </b-dropdown-item>
            <b-dropdown-item class="overflow">
              Mega Light
              <b-list-group class="absolute">
                <b-list-group-item to="/outdoor">Erbil</b-list-group-item>
                <b-list-group-item to="/outdoor">Sulaimanyah</b-list-group-item>
                <b-list-group-item to="/outdoor">Kirkuk</b-list-group-item>
              </b-list-group>
            </b-dropdown-item>
            <b-dropdown-item class="overflow">
              Tower
              <b-list-group class="absolute">
                <b-list-group-item to="/outdoor">Erbil</b-list-group-item>
                <b-list-group-item to="/outdoor">Sulaimanyah</b-list-group-item>
                <b-list-group-item to="/outdoor">Kirkuk</b-list-group-item>
              </b-list-group>
            </b-dropdown-item>
            <b-dropdown-item class="overflow">
              Cylinder
              <b-list-group class="absolute">
                <b-list-group-item to="/outdoor">Erbil</b-list-group-item>
                <b-list-group-item to="/outdoor">Sulaimanyah</b-list-group-item>
                <b-list-group-item to="/outdoor">Kirkuk</b-list-group-item>
              </b-list-group>
            </b-dropdown-item>
            <b-dropdown-item class="overflow">
              Water Tank
              <b-list-group class="absolute">
                <b-list-group-item to="/outdoor">Erbil</b-list-group-item>
                <b-list-group-item to="/outdoor">Sulaimanyah</b-list-group-item>
                <b-list-group-item to="/outdoor">Kirkuk</b-list-group-item>
              </b-list-group>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="navbar_style1" to="/about" right>
            <span :class="logoColor=='white'?'whiteColorNavbar':'blackColorNavbar'">About Us</span>
          </b-nav-item>
          <b-nav-item class="navbar_style1" to="/transit">
            <span :class="logoColor=='white'?'whiteColorNavbar':'blackColorNavbar'">Transit Ad</span>
          </b-nav-item>
          <b-nav-item class="navbar_style1" to="/design">
            <span :class="logoColor=='white'?'whiteColorNavbar':'blackColorNavbar'">Designing</span>
          </b-nav-item>
          <b-nav-item class="navbar_style1" to="/print">
            <span :class="logoColor=='white'?'whiteColorNavbar':'blackColorNavbar'">Printing</span>
          </b-nav-item>
          <b-nav-item class="navbar_style1" to="/media">
            <span :class="logoColor=='white'?'whiteColorNavbar':'blackColorNavbar'">Media</span>
          </b-nav-item>
          <b-nav-item class="navbar_style1" to="/client">
            <span :class="logoColor=='white'?'whiteColorNavbar':'blackColorNavbar'">Our Clients</span>
          </b-nav-item>
          <b-nav-item class="navbar_style1" to="/contact">
            <span :class="logoColor=='white'?'whiteColorNavbar':'blackColorNavbar'">Contact Us</span>
          </b-nav-item>
          <b-nav-text class="navbarLogoStyle">
            <Icons  v-for="(item, index) in icons_array" :key="index" :iconName="item" iconType="fab" :iconClass="'circle-icon logoIcons fa-1x '+(logoColor=='black'?' blackStyle ':' whiteStyle ')" />
          </b-nav-text>
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
    data() {
      return {
        icons_array:["facebook-f","twitter","linkedin-in"],
        smallScreen:false
      }
    },
    props:{
      homeToggle:{type:String,default:"false"},
      logoColor:{type:String,default:"black"},
    },
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize() {
        if(Number(window.outerWidth)<1024){
          this.smallScreen=true;
        }else{
          this.smallScreen=false;
        }
      }
    }

  }
</script>
<style lang="scss" scoped >
  @import "../../assets/style/components/header/navbar.scss";

</style>