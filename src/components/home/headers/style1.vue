<template>
    <div :style="style1" v-if='showIcon=="true"'>
        <div class="row h-100" >
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <span :class="text1.class" :style="text1.style">{{text1.text}}</span>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 " v-if="Object.keys(text2).length>0">
              <span :class="text2.class" :style="text2.style">{{text2.text}}</span>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" v-else >
              <div class="row float-right">
                <div class="mr-3" v-for="(item, index) in icons_array" :key="index">
                  <Icons :iconName="item" iconType="fab" extraClass="" iconStyle="color:white;border: solid 1px white;" iconSize="sm" iconClass="circle-icon logoStyle3"/>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Icons from '../../general/icons'
   export default {
        data() {
            return {
                icons_array:["facebook-f","twitter","instagram","pinterest-p","youtube","vimeo-v"],
                style1:{
                    "position":"absolute",
                    "z-index": 1000,
                    "color":"white",
                    "opacity":0.8,
                    "width":"calc(100% - 5px)",
                    "height":"30px",
                    "background-color":"#222",
                    ...this.design
                },
            }
        },
        components:{
            Icons
        },
        props: {
            design: {type: Object},
            showIcon: {type: String,default:"false"},
            text1: {type: Object},
            text2: {type: Object,default:() => ({})},
        }
    }
</script>
<style scoped> 
</style>