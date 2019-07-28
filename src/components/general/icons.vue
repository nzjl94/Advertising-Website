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
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        vertical-align: middle; 
        border: solid 3px black;
   }
   .circle-icon-small {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        text-align: center;
        line-height: 25px;
        vertical-align: middle; 
        border: solid 3px black;
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
</style>