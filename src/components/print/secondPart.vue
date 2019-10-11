<template>
        <div class="row mainContainer">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item, index) in allcards" :key="index">
                <card-item :mHeader="item.mainText" :imgUrL="item.image" :classes="{headerClass:'headerText',bodyClass:'bodyText'}"></card-item>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex flex-column">
                <p class="bottomText">We will Make the Best Printing for You:)</p>
            </div>
        </div>    
</template>
<script>
  import cardItem  from '../general/cardWithImage';
    export default {
        components:{
            cardItem
        },
        data(){
            return {
                allcards:[
                    {"mainText":"Catalogues","subText":"including history, vision","image":"print/7.png"},
                    {"mainText":"Leaflets","subText":"specifications and examples of usage","image":"print/6.png"},
                    {"mainText":"Flyers","subText":"Lorem ipsum","image":"print/5.png"},
                    {"mainText":"Roll- up Banner","subText":"Lorem ipsumLorem","image":"print/4.png"},
                    {"mainText":"Calendars","subText":"including history, vision","image":"print/3.png"},
                ]
            }
        }
    }
</script>
<style  lang="scss" scoped>
    @import "../../assets/style/components/print/secondPart.scss";
</style>