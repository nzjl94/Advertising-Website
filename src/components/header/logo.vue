<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div class="row">
          <img :src="require(`../../assets/image/logo/${logo}`)" class="ml-4 my-3" height="90px" width="326px;">
        </div>
      </div>
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-auto">
        <div class="float-right pr-4">
          <h1 :style="'color:'+color">Light Up Your Brand</h1>
          <div class="row">
              <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 mx-0 px-0" v-for="(item, index) in icons_array" :key="index">
                  <Icons :iconName="item" iconType="fab" :iconStyle="'color:'+color+';border: solid 3px '+color" iconClass="circle-icon logoStyle1"/>
              </div>
            </div>
        </div>
      </div>   
    </div>
  </div>
</template>
<script>
  import Icons from '../general/icons'
  export default {
    props: {
      color: {type: String,default:"black"},
      logo:  {type: String,default:"logo.png"},
    },
    data() {
      return {
        icons_array:["facebook-f","twitter","instagram","pinterest-p","youtube","vimeo-v"]
      }
    },
    components:{
      Icons
    }

  }
</script>

