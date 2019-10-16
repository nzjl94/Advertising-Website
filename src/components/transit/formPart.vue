<template>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2  class="mainText">SUBCRIPTION</h2>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mainContainer">
            <formTransit containerClass="forms firstForm"  :formText="{text:'Taxi',classes:'subText'}"></formTransit>
            <formTransit containerClass="forms secondForm" :formText="{text:'Medium Public Bus',classes:'subText'}"></formTransit>
            <formTransit containerClass="forms thirdForm"  :formText="{text:'Large Public Bus',classes:'subText'}"></formTransit>
        </div>
        
    </div>
</template>
<script>
    import formTransit from './forms/form';
    export default {
        components:{
            formTransit
        }
    }
</script>
<style scoped lang="scss">
    @import "../../assets/style/components/transit/formPart.scss";
</style>
