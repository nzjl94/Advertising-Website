<template>
  <div class="row">
    <footer-logo></footer-logo>
    <footer-social></footer-social>
    <company-info></company-info>
    <footer-container></footer-container>
  </div>
</template>
<script>
  import companyInfo from "../components/footer/companyInfo";
  import footerSocial from "../components/footer/footerSocial";
  import footerLogo from "../components/footer/footerLogo";
  import footerContainer from "../components/footer/footer";
  export default {
    components:{
      companyInfo,
      footerContainer,
      footerSocial,
      footerLogo
    }
  }
</script>
<style>

</style>



