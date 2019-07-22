<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" :style="jumbotron">
       <slot></slot>
  </div>
</template>
<script>
    export default {
        props: {
            opacity: {type: String,default:"0.7"},
            height: {type: String,default:"230px"},
            imgUrL: {type: String,default:"print/1.png"}
        },
        data() {
            return {
                jumbotron:{
                    "opacity": this.opacity,
                    "background-image": 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(' + require(`../../assets/image/${this.imgUrL}`) + ')' ,
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
