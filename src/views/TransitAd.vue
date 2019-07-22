<template>
  <div class="row" >
    <tabs></tabs>
    <contact-us></contact-us>
    <forms></forms>
  </div>
</template>
<script>
  import contactUs  from '../components/transitad/contactUs';
  import forms      from '../components/transitad/forms';
  import tabs       from '../components/transitad/tabs';
  export default {
    components:{
      contactUs,
      forms,
      tabs
    }
  }
</script>