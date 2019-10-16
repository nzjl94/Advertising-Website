<template>
    <div class="row">
      <containerIB imgUrL="home/5.png" height="188px" opacity="0.2">
         <div class="mainContainer">
            <div class="subContainer" v-for="(item, index) in icons_array" :key="index">
                <h3 :class="item[0].classes">{{item[0].text}}</h3>
                <Icons 
                    :iconName="item[2].iconName" 
                    :iconType="item[2].type" 
                    iconClass="circle-icon logoIcons fa-1x"
                />
                <h3 :class="item[1].classes">{{item[1].text}}</h3>
            </div>
         </div>
      </containerIB>
    </div>
</template>
<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Icons from '../general/icons'
    import containerIB  from '../general/containerImageBackground';
    export default {
      data() {
        return {
          icons_array:[
           [
             {"text":"Projects","classes":"topText"},
             {"text":"1200","classes":"bottomText"},
             {"iconName":"sticky-note","classes":"","type":"far"}
           ],[
             {"text":"Rewards","classes":"topText"},
             {"text":"500","classes":"bottomText"},
             {"iconName":"award","classes":"","type":"fas"}
           ],[
             {"text":"Branchs","classes":"topText"},
             {"text":"4","classes":"bottomText"},
             {"iconName":"store","classes":"","type":"fas"}
           ],[
             {"text":"Staff","classes":"topText"},
             {"text":"132","classes":"bottomText"},
             {"iconName":"clipboard-list","classes":"","type":"fas"}
           ],[
             {"text":"Happy Clients","classes":"topText"},
             {"text":"680","classes":"bottomText"},
             {"iconName":"address-book","classes":"","type":"far"}
           ],
          ]
        }
      },
      components:{
        Icons,
        containerIB
      },
    }
</script>
<style  lang="scss" scoped>
    @import "../../assets/style/components/home/sixthPart.scss";
</style>