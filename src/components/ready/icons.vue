<template>
    <i :class="[iconType,'fa-'+iconName,'fa-'+iconSize,iconClass]" :style="iconStyle"></i>
</template>
<script>
    export default {
        props: {
            iconType: {type: String,default:"fas"},
            iconName: {type: String,default:"camera"},
            iconSize: {type: String,default:"2x"},
            iconStyle: {type: String,default:"color:black;"},
            iconClass: {type: String,default:"circle-icon"}
        }
    }
</script>
<style scoped>
    .circle-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
        vertical-align: middle; 
        border: solid 3px black;
   }

</style>