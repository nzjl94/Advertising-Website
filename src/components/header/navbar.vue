<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">
        <Icons iconName="home" iconType="fa" iconClass="" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav align="center">
          <b-nav-item to="/" >Outdoors</b-nav-item>
          <b-nav-item to="/about" >About Us</b-nav-item>
          <b-nav-item to="/transit">
          Transit Ad</b-nav-item>
          <b-nav-item to="/design">Designing</b-nav-item>
          <b-nav-item to="/print">Printing</b-nav-item>
          <b-nav-item to="/media">Media</b-nav-item>
          <b-nav-item to="/client">Our Clients</b-nav-item>
          <b-nav-item to="/contact">Contact Us</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import '@fortawesome/fontawesome-free/css/all.css'
  import Icons from '../ready/icons'
  export default {
    components:{
      Icons
    }

  }
</script>
<style scoped>
  .nav-link{
      color:black!important;
      font-size: 18px;
      font-weight: 900;
  }
</style>