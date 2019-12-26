<template>
    <b-card  no-body :class="'text-center '+classes.cardClass">
        <b-card-img :src="require(`../../assets/image/${imgUrL}`)" alt="Image" top :class="classes.imageClass"></b-card-img>
        <b-card-body class="py-0 px-1">
          <b-card-title :class="classes.headerClass" :title-tag="hTag">{{mHeader}}</b-card-title>
          <b-card-text tag="article" :class="classes.bodyClass">
              {{body}}
          </b-card-text>
          <b-button type="submit" block pill variant="outline-danger" :class="classes.buttonClass">Request</b-button>
        </b-card-body>
        
    </b-card>
</template>
<script>
    export default {
        props: {
            mHeader: {type: String,default:"Catalogues"},
            body: {type: String,default:`
                Not only we do outdoor, indoor advertising and marketing, we also make catalogues for your business, it’s a clean and easy way
                to showcase your services and information.
            `},
            imgUrL: {type: String},
            hTag: {type: String,default:"h2"},
            classes:{type: Object,default: () => ({headerClass:"",bodyClass:"",imageClass:"",cardClass:'',buttonClass:''})}
        },
        data() {
            return {
                
            }
        }
    } 
</script>
<style lang="scss" scoped>
    
</style>
