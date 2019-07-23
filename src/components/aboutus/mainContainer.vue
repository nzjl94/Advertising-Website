<template>
    <div class="container-fluid">
        <above-image></above-image>
        <first-part></first-part>
        <second-part></second-part>
        <third-part></third-part>
        <fourth-part></fourth-part>
    </div>
</template>
<script>
    import aboveImage  from './aboveImage';
    import firstPart  from './firstPart';
    import secondPart  from './secondPart';
    import thirdPart  from './thirdPart';
    import fourthPart  from './fourthPart';
    export default {
      components:{
        aboveImage,
        firstPart,
        secondPart,
        thirdPart,
        fourthPart
      },
      
    }
</script>
<style scoped>

</style>

