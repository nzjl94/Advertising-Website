<template>
    <div :class="design" v-if='showIcon=="true"'>
      <span :class="text1.class">{{text1.text}}</span>
      <span :class="text2.class" v-if="Object.keys(text2).length>0">{{text2.text}}</span>
      <div :class="icons.classContainer"  v-if="icons.show" >
        <span :class="icons.classItem" v-for="(item, index) in icons_array" :key="index">
          <Icons :iconName="item" iconType="fab" iconClass="circle-icon logoIcons fa-1x whiteStyle"/>
        </span>
      </div>
    </div>
</template>
<script>
    import Icons from '../../general/icons'
   export default {
        data() {
            return {
                icons_array:["facebook-f","twitter","instagram","pinterest-p","youtube","vimeo-v"],
            }
        },
        components:{
            Icons
        },
        props: {
            design: {type: String},
            showIcon: {type: String,default:"false"},
            text1: {type: Object},
            icons: {type: Object,default:() => ({"classItem":"","classContainer":"","show":false})},
            text2: {type: Object,default:() => ({})},
        }
    }
</script>