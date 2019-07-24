<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 m-0">
        <b-jumbotron :style="jumbotron" class=" mb-0">
            <h2 class="text-white text-center display-4 font-weight-bold">{{mHeader}}</h2>
            <h5 class="text-white text-center font-weight-bolder" v-if="sHeader.length>0">{{sHeader}}</h5>
            <b-button pill variant="outline-light" class="px-5 mx-auto d-block" v-if="bHeader.length>0">
                {{bHeader}}
            </b-button>
        </b-jumbotron>
  </div>
</template>
<script>
    export default {
        props: {
            mHeader: {type: String,default:"Our Clients"},
            sHeader: {type: String,default:""},
            bHeader:{type: String,default:""},
            opacity: {type: String,default:"0.7"},
            height: {type: String,default:"230px"},
            imgUrL: {type: String,default:"print/1.png"}
        },
        data() {
            return {
                jumbotron:{
                    "opacity": this.opacity,
                    "background-image": 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(' + require(`../../assets/image/${this.imgUrL}`) + ')' ,
                    "background-position":"center",
                    "background-size": "cover",
                    "background-repeat": "no-repeat",
                    "height": this.height
                } 
            }
        }
    } 
</script>
<style scoped>
    
</style>
