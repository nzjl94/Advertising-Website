<template>
  <div :class="grid+' '+classes" >
       <slot></slot>
  </div>
</template>
<script>
    export default {
        props: {
            grid:{type: String,default:"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"},
            classes:{type:String,default:""}
        },
        data() {
            return {
                 
            }
        }
    } 
</script>
<style lang="scss" scoped>
    
</style>
