<template>
    <div>
        <first-part></first-part>
        <contact-us></contact-us>
        <hr/>
    </div>
</template>
<script>
    import contactUs  from './secondPart';
    import firstPart       from './firstPart';
    export default {
      components:{
        contactUs,
        firstPart
      }
    }
</script>
<style scoped lang="scss">

</style>

