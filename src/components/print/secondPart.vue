<template>
        <div class="mainContainer">
            <div :class="item.classes+' columnsMainContainer'" v-for="(item, index) in allcards" :key="index">
                <card-item :mHeader="item.mainText" :imgUrL="item.image" :classes="{headerClass:'headerText',bodyClass:'bodyText',imageClass:'imageCard',cardClass:'mainCard',buttonClass:'buttonCard'}"></card-item>
            </div>
            <div class="columnsMainContainer sixthColumn">
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
                    {"classes":"firstColumn","mainText":"Catalogues","subText":"including history, vision","image":"print/7.png"},
                    {"classes":"secondColumn","mainText":"Leaflets","subText":"specifications and examples of usage","image":"print/6.png"},
                    {"classes":"thirdColumn","mainText":"Flyers","subText":"Lorem ipsum","image":"print/5.png"},
                    {"classes":"fourthColumn","mainText":"Roll- up Banner","subText":"Lorem ipsumLorem","image":"print/4.png"},
                    {"classes":"fifthColumn","mainText":"Calendars","subText":"including history, vision","image":"print/3.png"},
                ]
            }
        }
    }
</script>
<style  lang="scss" scoped>
    @import "../../assets/style/components/print/secondPart.scss";
</style>