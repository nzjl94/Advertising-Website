<template>
    <i :class="[iconType,'fa-'+iconName,iconClass]"></i>
</template>
<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    export default {
        props: {
            iconType: {type: String,default:"fas"},
            iconName: {type: String,default:"camera"},
            iconClass: {type: String,default:""},
        }
    }
</script>
<style scoped>
    
    .logoStyle1{
        width: 35px;
        height: 35px;
        line-height: 35px;
        border: solid 2px black;
    }
    .logoStyle3{
        width: 16px;
        height: 16px;
        line-height: 16px;
        border: solid 1px black;
    }
    .logoStyle4{
        width: 60px;
        height: 60px;
        line-height: 60px;
        border: solid 3px black;
    }
   .fa-2x{
       font-size:22px;
   }
   .fa-3x{
       font-size:30px;
   }
   .fa-sm{
       font-size:8px;
   }
</style>