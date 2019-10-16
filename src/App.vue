<template>
  <div id="app" class="container-fluid wrapper px-0">
     <Header></Header>
     <router-view/>
     <Footer></Footer>
  </div>
</template>
<script>
  import Header from "./views/header";
  import Footer from "./views/footer";
  export default {
    components:{
      Header,
      Footer
    },
  }
</script>
<style>
  body {overflow-x: hidden;}  
</style>
