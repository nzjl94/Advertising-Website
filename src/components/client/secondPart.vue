<template>
    <div class="mainContainer">
        <div v-for="(item, index) in images" :key="index" class="subContainer">
            <img 
                :src="require(`../../assets/image/${item.link}`)" 
                class="imageSize" 
                :id="'image_'+index" 
                @mouseover="$event.target.classList.toggle('hoverClass')" 
                @mouseleave="whenHover(false,index)"
                @click="changeBackground(index)"
            >
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return {
                //mx-auto d-block img-fluid
                hover: false,
                images:[
                    {"title":"Our Clients 1","content":"We do Best, We made them Happy! 1","link":"client/logo/1.png"},
                    {"title":"Our Clients 2","content":"We do Best, We made them Happy! 2","link":"client/logo/2.png"},
                    {"title":"Our Clients 3","content":"We do Best, We made them Happy! 3","link":"client/logo/3.png"},
                    {"title":"Our Clients 4","content":"We do Best, We made them Happy! 4","link":"client/logo/4.png"},
                    {"title":"Our Clients 5","content":"We do Best, We made them Happy! 5","link":"client/logo/5.png"},
                    {"title":"Our Clients 6","content":"We do Best, We made them Happy! 6","link":"client/logo/6.png"},
                    {"title":"Our Clients 7","content":"We do Best, We made them Happy! 7","link":"client/logo/7.png"},
                    {"title":"Our Clients 8","content":"We do Best, We made them Happy! 8","link":"client/logo/8.png"},
                    {"title":"Our Clients 9","content":"We do Best, We made them Happy! 9","link":"client/logo/9.png"},
                    {"title":"Our Clients 10","content":"We do Best, We made them Happy! 10","link":"client/logo/10.png"},
                    {"title":"Our Clients 11","content":"We do Best, We made them Happy! 11","link":"client/logo/11.png"},
                    {"title":"Our Clients 12","content":"We do Best, We made them Happy! 12","link":"client/logo/12.png"},
                    {"title":"Our Clients 13","content":"We do Best, We made them Happy! 13","link":"client/logo/13.png"},
                    {"title":"Our Clients 14","content":"We do Best, We made them Happy! 14","link":"client/logo/14.png"},
                    {"title":"Our Clients 15","content":"We do Best, We made them Happy! 15","link":"client/logo/15.png"},
                    {"title":"Our Clients 16","content":"We do Best, We made them Happy! 16","link":"client/logo/16.png"},
                    {"title":"Our Clients 17","content":"We do Best, We made them Happy! 17","link":"client/logo/17.png"},
                    {"title":"Our Clients 18","content":"We do Best, We made them Happy! 18","link":"client/logo/18.png"},
                    {"title":"Our Clients 19","content":"We do Best, We made them Happy! 19","link":"client/logo/19.png"},
                    {"title":"Our Clients 20","content":"We do Best, We made them Happy! 20","link":"client/logo/20.png"},
                ]
            }
        },
        methods: {
            ...mapMutations([
                "setClintHeaderData"
            ]),
            whenHover:function(state,id){
                document.getElementById(`image_${id}`).classList.remove("hoverClass");
            },
            changeBackground:function(id){
                this.setClintHeaderData(this.images[id]);
            }
        },
    }
</script>
<style  lang="scss" scoped>
  @import "../../assets/style/components/client/secondPart.scss";
</style>