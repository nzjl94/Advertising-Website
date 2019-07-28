<template>
    <div class="row">
        <footer-logo></footer-logo>
        <footer-social></footer-social>
        <company-info></company-info>
        <footer-container></footer-container>
    </div>
</template>
<script>
    import companyInfo from "./companyInfo";
    import footerSocial from "./footerSocial";
    import footerLogo from "./footerLogo";
    import footerContainer from "./footer";
    export default {
      components:{
        companyInfo,
        footerSocial,
        footerLogo,
        footerContainer
      },
      
    }
</script>
<style scoped>

</style>