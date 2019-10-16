<template>
    <div>
        <tabs></tabs>
        <second-part></second-part>
        <forms></forms>
    </div>
</template>
<script>
    import secondPart  from '../transit/secondPart';
    import forms      from '../transit/formPart';
    import tabs       from '../transit/tabs';
    export default {
      components:{
        secondPart,
        forms,
        tabs
      }
    }
</script>
<style scoped>

</style>

