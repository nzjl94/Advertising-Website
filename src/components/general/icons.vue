<template>
    <i :class="[extraClass,iconType,'fa-'+iconName,'fa-'+iconSize,iconClass]" :style="iconStyle"></i>
</template>
<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    export default {
        props: {
            iconType: {type: String,default:"fas"},
            iconName: {type: String,default:"camera"},
            iconSize: {type: String,default:"2x"},
            iconStyle: {type: String,default:"color:black;"},
            iconClass: {type: String,default:"circle-icon"},
            extraClass: {type: String,default:""},
        }
    }
</script>
<style scoped>
    .circle-icon {
        border-radius: 50%;
        text-align: center; 
        vertical-align: middle;  
    }
    .logoStyle1{
        width: 35px;
        height: 35px;
        line-height: 35px;
        border: solid 2px black;
    }
    .logoStyle2{
        width: 50px;
        height: 50px;
        line-height: 50px;
        border: solid 3px black;
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