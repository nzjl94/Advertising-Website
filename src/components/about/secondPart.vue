<template>
    <div class="row py-3 px-0 mx-0">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 mx-0">
            <img src="../../assets/image/about/1.png" class="img-fluid" width="100%">
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 mx-0">
            <containerCB 
                background="white" 
                height=""
                grid="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center"
            >
                <h2 class="text-left mb-4"><ins>Why City Light</ins></h2>
                <ul class="">
                    <li class="">
                        <!--<Icons iconName="circle" iconStyle="color:rgb(193, 39, 45);border: solid 0px rgb(193, 39, 45);" iconSize="sm"/>-->
                        We have Experts teams in each of Baghdad, Erbil, Sulimaniya, Kirkuk and Basra,
                        to reach all companies at every stage.
                    </li>
                    <li>
                        <!--<Icons iconName="circle" iconStyle="color:rgb(193, 39, 45);border: solid 0px rgb(193, 39, 45);" iconSize="sm"/>-->
                        We have huge network of Panels clients in Erbil, Suly, and Kirkuk cites.
                    </li>
                    <li>
                        <!--<Icons iconName="circle" iconStyle="color:rgb(193, 39, 45);border: solid 0px rgb(193, 39, 45);" iconSize="sm"/>-->
                        We are decicated to our work and our clients. Every step of the way.
                    </li>
                </ul>
                <h2 class="text-center">DESIGN.</h2>
                <h2 class="text-center padding1">CREATIVE.</h2>
                <h2 class="text-center padding2">INNOVATIVE.</h2>
            </containerCB>
        </div>
    </div>
</template>
<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Icons from '../general/icons'
    import containerCB  from '../general/containerColorBackground';
    export default {
      components:{
          Icons,
          containerCB
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