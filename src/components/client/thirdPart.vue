<template>
    <div class="row">
        <containerCB background="white">
            <h1 class="redMean1">OUR MISSION</h1>
            <img src="../../assets/image/home/8.png" class="mx-auto d-block">
            <h2 class="redMean2">WE ARE,</h2>
            <p class="redMean3">
              Nunc odio eros, lacinia ut velit ac, semper semper dolor. Vestibulum porttitor dolor non ipsum laoreet, vel bibendum lorem 
              facilisis. Sed hendrerit, erat ac varius hendrerit, elit erat interdum mi, in dictum diam augue sed neque. Pellentesque a ante
               accumsan sem placerat egestas sed vel nisi. Sed a nulla pharetra, dignissim orci efficitur, sollicitudin orci.
            </p>
        </containerCB>
        <containerCB background="#c1272d" >
            <h1 class="whiteMean1">OUR VISION</h1>
            <img src="../../assets/image/home/7.png" class="mx-auto d-block">
            <h2 class="whiteMean2">WE ARE,</h2>
            <p class="whiteMean3">
              Nunc odio eros, lacinia ut velit ac, semper semper dolor. Vestibulum porttitor dolor non ipsum laoreet, vel bibendum lorem 
              facilisis. Sed hendrerit, erat ac varius hendrerit, elit erat interdum mi, in dictum diam augue sed neque. Pellentesque a ante
               accumsan sem placerat egestas sed vel nisi. Sed a nulla pharetra, dignissim orci efficitur, sollicitudin orci.
            </p>
        </containerCB>
    </div>
</template>
<script>
    import containerCB  from '../general/containerColorBackground';
    export default {
        components:{
            containerCB
        }
    }
</script>
<style  lang="scss" scoped>
  @import "../../assets/style/components/client/thirdPart.scss";
</style>