<template>
    <div>
        <above-image></above-image>
        <first-part></first-part>
        <second-part></second-part>
        <third-part></third-part>
        <fourth-part></fourth-part>
        <fifth-part></fifth-part>
    </div>
</template>
<script>
    import aboveImage  from './aboveImage';
    import firstPart  from './firstPart';
    import secondPart  from './secondPart';
    import thirdPart  from './thirdPart';
    import fourthPart  from './fourthPart';
    import fifthPart  from '../home/fifthPart';
    export default {
      components:{
        aboveImage,
        firstPart,
        secondPart,
        thirdPart,
        fourthPart,
        fifthPart
      },
      
    }
</script>
<style scoped>

</style>

