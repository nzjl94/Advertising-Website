<template>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 px-0 mx-0">
            <img src="../../assets/image/about/1.png" class="mainImage" width="100%">
        </div>
        <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 my-auto" style="background:#FAFAFA;">
            <h2 class="headerText"><ins>Why City Light</ins></h2>
            <div class="rightContainer">
                <div class="bubbleContainer">
                    <div class="bubbleButton"></div>
                    <p class="bubbleText">
                        We have Experts teams in each of Baghdad, Erbil, Sulimaniya, Kirkuk and Basra,
                        to reach all companies at every stage.
                    </p>
                </div>
                <div class="bubbleContainer">
                    <div class="bubbleButton"></div>
                    <p class="bubbleText">
                        We have huge network of Panels clients in Erbil, Suly, and Kirkuk cites.
                    </p>
                </div>
                <div class="bubbleContainer">
                    <div class="bubbleButton"></div>
                    <p class="bubbleText">
                        We are decicated to our work and our clients. Every step of the way.
                    </p>
                </div>
                <p class="buttomText">DESIGN.</p>
                <p class="buttomText padding1">CREATIVE.</p>
                <p class="buttomText padding2">INNOVATIVE.</p>
            </div>
            
        </div>
    </div>
</template>
<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Icons from '../general/icons'
    export default {
      components:{
          Icons,
      }
    }
</script>
<style scoped lang="scss">
    ins { 
      text-decoration:none;
      border-bottom: 2px solid red;
      padding-bottom: 5px;
    }
    .padding1{
        padding-left: 70px
    }
    .padding2{
        padding-left: 140px
    }
    @import "../../assets/style/components/about/secondPart.scss";
</style>