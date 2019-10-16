<template>
    <div>
        <tabs></tabs>
        <contact-us></contact-us>
        <hr/>
    </div>
</template>
<script>
    import contactUs  from './secondPart';
    import tabs       from './tabs';
    export default {
      components:{
        contactUs,
        tabs
      }
    }
</script>
<style scoped>

</style>

