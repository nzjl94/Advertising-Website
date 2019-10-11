<template>
    <div class="row mainContainer">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" v-for="(item, index) in allcards" :key="index">
            <card-item :mHeader="item.mainText" :imgUrL="item.image" :body="item.subText" :classes="{headerClass:'headerText',bodyClass:'bodyText'}"></card-item>
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
                    {"mainText":"Overview Brands","subText":"including history, vision","image":"design/10.png"},
                    {"mainText":"Logo","subText":"specifications and examples of usage","image":"design/13.png"},
                    {"mainText":"Typography Palette","subText":"Lorem ipsum","image":"design/3.png"},
                    {"mainText":"Color Palette","subText":"Lorem ipsumLorem","image":"design/1.png"},
                    {"mainText":"Image","subText":"including history, vision","image":"design/5.png"},
                    {"mainText":"Letterhead and Business Card","subText":"including history, vision","image":"design/7.png"},
                    {"mainText":"Design","subText":"including history, vision","image":"design/6.png"},
                    {"mainText":"Brochure","subText":"including history, vision","image":"design/8.png"},
                    {"mainText":"Specifications","subText":"including history, vision","image":"design/12.png"},
                    {"mainText":"Writing Style And Voice","subText":"In these modern  times press in an  ingenious way to get your bussiness","image":"design/11.png"},
                    {"mainText":"Social Media","subText":"In these modern  times press in an  ingenious way to get your bussiness","image":"design/9.png"},
                    {"mainText":"Visual Examples","subText":"In these modern  times press in an  ingenious way to get your bussiness","image":"design/4.png"},
                ]
            }
        }
    }
</script>
<style  lang="scss" scoped>
    @import "../../assets/style/components/design/thirdPart.scss";
</style>