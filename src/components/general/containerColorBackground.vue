<template>
  <div :class="grid" style="overflow-y:scroll;" :style="[style]">
       <slot></slot>
  </div>
</template>
<script>
    export default {
        props: {
            height: {type: String,default:"450px"},
            extra: {type: String,default:"overflow-y:scroll;"},
            background:{type: String,default:"red"},
            grid:{type: String,default:"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"},
        },
        data() {
            return {
                style:{
                    "background-color": this.background,
                    "height": this.height
                } 
            }
        }
    } 
</script>
<style scoped>
    
</style>
