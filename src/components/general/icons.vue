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
        width: 35px;
        height: 35px;
        border-radius: 50%;
        text-align: center;
        line-height: 35px;
        vertical-align: middle; 
        border: solid 2px black;
   }
   .circle-icon-small {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        text-align: center;
        line-height: 16px;
        vertical-align: middle; 
        border: solid 1px black;
   }
   .circle-icon-large {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        text-align: center;
        line-height: 120px;
        vertical-align: middle; 
        border: solid 3px black;
   }
   .fa-2x{
       font-size:22px;
   }
   .fa-sm{
       font-size:8px;
   }
</style>