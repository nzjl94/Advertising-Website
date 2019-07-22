<template>
  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" :style="jumbotron">
       <slot></slot>
  </div>
</template>
<script>
    export default {
        props: {
            height: {type: String,default:"450px"},
            background:{type: String,default:"red"}
        },
        data() {
            return {
                jumbotron:{
                    "background-color": this.background,
                    "height": this.height
                } 
            }
        }
    } 
</script>
<style scoped>
    
</style>
