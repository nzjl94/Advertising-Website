<template>
    <div class="">
        <second-part></second-part>
        <third-part></third-part>
        <fourth-part></fourth-part>
        <fifth-part></fifth-part>
       <!-- <sixth-part></sixth-part> -->
    </div>
</template>
<script>
    import secondPart  from './secondPart';
    import thirdPart  from './thirdPart';
    import fourthPart  from '../client/thirdPart';
    import fifthPart  from './fifthPart';
   // import sixthPart  from './sixthPart';
    export default {
      components:{
        secondPart,
        thirdPart,
        fourthPart,
        fifthPart,
       // sixthPart
      },
      
    }
</script>
<style scoped lang="scss">
</style>