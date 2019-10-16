<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 m-0">
        <b-jumbotron :style="jumbotron" class="jumbotron-fluid mb-0">
            <div class="container">
                <h2 :class="mHeader.classes">{{mHeader.text}}</h2>
                <h5 :class="sHeader.classes" v-if="sHeader.text.length>0">{{sHeader.text}}</h5>
                <b-button pill variant="outline-light" :class="bHeader.classes" v-if="bHeader.text.length>0">
                    {{bHeader.text}}
                </b-button>
            </div>
        </b-jumbotron>
  </div>
</template>
<script>
    export default {
        props: {
            mHeader: {type: Object,default: () => ({text:"Our Clients",classes:""})},
            sHeader: {type: Object,default: () => ({text:"",classes:""})},
            bHeader:{type: Object,default: () => ({text:"",classes:""})},
            opacity: {type: String,default:"0.7"},
            height: {type: String,default:"230px"},
            imgUrL: {type: String,default:"print/1.png"}
        },
        data() {
            return {
                jumbotron:{
                    "opacity": this.opacity,
                    "background-image": 'linear-gradient(rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)),url(' + require(`../../assets/image/${this.imgUrL}`) + ')' ,
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
