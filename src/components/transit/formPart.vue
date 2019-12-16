<template>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2  class="mainText">SUBCRIPTION</h2>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mainContainer">
            <formTransit v-on:comingDataFromChild="onchildSubmit" containerClass="forms firstForm"  :formText="{type:'taxi',text:'Taxi',classes:'subText'}"></formTransit>
            <formTransit v-on:comingDataFromChild="onchildSubmit" containerClass="forms secondForm" :formText="{type:'mbus',text:'Medium Public Bus',classes:'subText'}"></formTransit>
            <formTransit v-on:comingDataFromChild="onchildSubmit" containerClass="forms thirdForm"  :formText="{type:'lbus',text:'Large Public Bus',classes:'subText'}"></formTransit>
        </div>
        
    </div>
</template>
<script>
    import formTransit from './forms/form';
    import axios from "axios";
    export default {
        components:{
            formTransit
        },
        methods: {
            onchildSubmit(formData){
                axios.post("/transit.json",formData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
            }
        },
    }
</script>
<style scoped lang="scss">
    @import "../../assets/style/components/transit/formPart.scss";
</style>
