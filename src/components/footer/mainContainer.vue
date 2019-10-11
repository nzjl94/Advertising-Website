<template>
    <div class="row" style="background-color:#c1272d;">
        <Logo></Logo>
        <Social></Social>
        <Info></Info>
        <creater></creater>
    </div>
</template>
<script>
    import Info from "./info";
    import Social from "./social";
    import Logo from "./logo";
    import creater from "./creater";
    export default {
      components:{
        Info,
        Social,
        Logo,
        creater
      },
      
    }
</script>
<style scoped>

</style>