<template>
    <div>
        <div v-if="getHomeNavbar" class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
            <logo logoColor="black" background="linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))" logo_left="blackLogo.png" logo_right="darkLogo2.png"></logo>
          </div>
          <hNavbar logoColor="black"></hNavbar>
        </div>
        <div class="row"  v-else>
            <containerIB 
                :imgUrL="activeData.imageUrl"
                grid="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0"
                classes="containerClasses"
                opacity="0.4"
                :key="counter"
            >
              <logo logoColor="white" background="linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))" logo_left="logo.png" logo_right="lightLogo2.png"></logo>
              <hNavbar homeToggle="getHomeNavbar" logoColor="white"></hNavbar>
              <div class="h-25">
                <h1 class="text-white text-center pt-5 header_style1" >{{activeData.text1}}</h1>
                <h2 class="text-white text-center pt-2 header_style2" style="font-weight:bold;">Your <span style="color:rgb(193, 39, 45);">Brand</span></h2>
                <div style="display:inline;margin-left:25px;" v-on:click="leftButton">
                  <Icons iconName="angle-left"  iconType="fa" iconClass="circle-icon logoIcons fa-3x logoIconsWhite" />
                </div>
                <div style="display:inline;float:right;margin-right:25px;" v-on:click="rightButton">
                  <Icons iconName="angle-right" iconType="fa" iconClass="circle-icon logoIcons fa-3x logoIconsWhite" />
                </div>
              </div>
              <div class="flexContainer">
                  <div class="flexColumnOne">
                    <h2 class="blackMainText">{{activeData.text3}}</h2>
                    <h4 class="blackSubText">
                      {{activeData.text4}}
                    </h4>
                  </div>
                  <div class="flexColumnTwo">
                    <b-button type="submit" variant="outline-light" class="blackButton">
                        Learn More
                    </b-button>
                  </div>
              </div>
            </containerIB>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Icons from '../general/icons'
    import logo from "./logo";
    import hNavbar from "./navbar";
    import containerIB  from '../general/containerImageBackground';
    export default {
      data() {
        let slideBarData=[
            {
              "text1":"Light Up Advertising","text2":"Your_Brand","text3":"Why use Outdoor ?",
              "text4":"Our ultimate goad and passion are about helping brands to meet the ever-shifting needs of communicates and cultures",
              "imageUrl":"home/3.png","isActive":1,"opacity":"0.1"
            },{
              "text1":"Light Up Advertising 1","text2":"Your_Brand1","text3":"Why use Outdoor1 ?",
              "text4":"Our ultimate goad and passion are about helping brands to meet the ever-shifting needs of communicates and cultures1",
              "imageUrl":"home/4.png","isActive":0,"opacity":"0.5"
            },{
              "text1":"Light Up Advertising 2","text2":"Your_Brand","text3":"Why use Outdoor ?",
              "text4":"Our ultimate goad and passion are about helping brands to meet the ever-shifting needs of communicates and cultures",
              "imageUrl":"home/6.png","isActive":0,"opacity":"0.9"
            }
        ];
        return {
          slideBarData,
          activeData:slideBarData[0],
          counter:1
        }
      },
      created() {
        this.interval = setInterval(() => this.leftButton(), 5000);
      },
      methods:{
        leftButton:function(event){
          for(let i=0,il=this.slideBarData.length;i<il;i++){
              if(this.slideBarData[i]["isActive"]==1){
                if(i==2){
                  this.activeData=this.slideBarData[0];
                  this.$set(this.slideBarData[0],"isActive",1);
                }else{
                  this.activeData=this.slideBarData[i+1];
                  this.$set(this.slideBarData[i+1],"isActive",1);
                }
                this.$set(this.slideBarData[i],"isActive",0);
                break;
              }
          }
          ++this.counter;
        },
        rightButton:function(event){
          for(let i=0,il=this.slideBarData.length;i<il;i++){
              if(this.slideBarData[i]["isActive"]==1){
                if(i==0){
                  this.activeData=this.slideBarData[2];
                  this.$set(this.slideBarData[2],"isActive",1);
                }else{
                  this.activeData=this.slideBarData[i-1];
                  this.$set(this.slideBarData[i-1],"isActive",1);
                }
                this.$set(this.slideBarData[i],"isActive",0);
                break;
              }
          }
          ++this.counter;
        }
      },
      components:{
        logo,
        hNavbar,
        containerIB,
        Icons
      },
      computed:{
        ...mapGetters([
          'getHomeNavbar'
        ])
      }
    }
</script>
<style  lang="scss" scoped>
  @import "../../assets/style/components/header/mainContainer.scss";
  .flexContainer {
      position: absolute;
      bottom: 0;
      background:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))
  }
</style>