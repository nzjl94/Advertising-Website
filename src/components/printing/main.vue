<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Catalogues" imgUrL="https://picsum.photos/600/300/?image=25"></card-item>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Leaflets" imgUrL="https://picsum.photos/600/300/?image=24"></card-item>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Flyers" imgUrL="https://picsum.photos/600/300/?image=27"></card-item>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Roll- up Banner" imgUrL="https://picsum.photos/600/300/?image=28"></card-item>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <card-item mHeader="Calendars" imgUrL="https://picsum.photos/600/300/?image=29"></card-item>
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
    export default {
        components:{
            cardItem
        }
    }
</script>
<style scoped>
    
</style>
