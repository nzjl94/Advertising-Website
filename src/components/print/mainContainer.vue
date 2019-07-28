<template>
    <div>
        <first-part></first-part>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Catalogues" imgUrL="print/7.png"></card-item>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Leaflets" imgUrL="print/6.png"></card-item>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Flyers" imgUrL="print/5.png"></card-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Roll- up Banner" imgUrL="print/4.png"></card-item>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Calendars" imgUrL="print/3.png"></card-item>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <b-card class="text-center h-100 p-0">
                    <b-card-body class="h-100 flex-middle" style="background-color:#c1272d;">
                      <b-card-text text-tag="span" class="text-white" >
                          We will Make the Best Printing for You:)
                      </b-card-text>
                    </b-card-body>  
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import cardItem  from '../general/cardWithImage';
    import firstPart  from './firstPart';
    export default {
        components:{
            firstPart,
            cardItem
        }
    }
</script>
<style scoped>
    
</style>
