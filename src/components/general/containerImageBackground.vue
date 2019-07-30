<template>
  <div :class="grid" :style="jumbotron">
       <slot></slot>
  </div>
</template>
<script>
    export default {
        props: {
            opacity: {type: String,default:"0.9"},
            height: {type: String,default:"230px"},
            imgUrL: {type: String,default:"print/1.png"},
            grid: {type: String,default:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}
        },
        data() {
            return {
                jumbotron:{
                    "background-image": `linear-gradient(rgba(0, 0, 0, ${this.opacity}), rgba(0, 0, 0, ${this.opacity})),url("${require('../../assets/image/'+this.imgUrL) }")` ,
                    "background-position":"center",
                    "background-size": "cover",
                    "background-repeat": "no-repeat",
                    "height": this.height
                } 
            }
        }
    } 
</script>
<style scoped>
    
</style>
