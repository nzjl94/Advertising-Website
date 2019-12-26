<template>
    <div>
        <first-part></first-part>
        <second-part></second-part>
        <fourth-part></fourth-part>
    </div>
</template>
<script>

    import firstPart  from './firstPart';
    import secondPart  from './secondPart';
    //import thirdPart  from './thirdPart';
    import fourthPart  from './fourthPart';
    export default {
      components:{
        firstPart,
        secondPart,
        fourthPart
      }
    }
</script>
<style  lang="scss" scoped>
</style>