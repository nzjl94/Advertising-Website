<template>
    <div>
        <tabs></tabs>
        <contact-us></contact-us>
        <forms></forms>
    </div>
</template>
<script>
    import contactUs  from '../transit/contactUs';
    import forms      from '../transit/forms';
    import tabs       from '../transit/tabs';
    export default {
      components:{
        contactUs,
        forms,
        tabs
      }
    }
</script>
<style scoped>

</style>

