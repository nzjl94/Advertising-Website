<template>
    <div>
        <first-part></first-part>
        <second-part></second-part>
        <third-part></third-part>

    </div>
</template>
<script>
  import firstPart  from './firstPart';
  import secondPart  from './secondPart';
  import thirdPart  from './thirdPart';
  export default {
    data() {
      return {
      }
    },
    components:{
      firstPart,
      secondPart,
      thirdPart
    }
  }
</script>
<style scoped>

</style>