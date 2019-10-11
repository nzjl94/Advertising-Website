<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 m-0">
    <b-card
        :img-src="require(`../../assets/image/${imgUrL}`)"
        img-alt="Image"
        img-top
        class="text-center"
      >
        <b-card-body class="px-0">
          <b-card-title :class="classes.headerClass" :title-tag="hTag">{{mHeader}}</b-card-title>
          <b-card-text tag="article" :class="classes.bodyClass">
              {{body}}
          </b-card-text>
          <b-button type="submit" block pill variant="outline-danger">Request</b-button>
        </b-card-body>
        
      </b-card>
  </div>
</template>
<script>
    export default {
        props: {
            mHeader: {type: String,default:"Catalogues"},
            body: {type: String,default:`
                Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.
            `},
            imgUrL: {type: String},
            hTag: {type: String,default:"h2"},
            classes:{type: Object,default: () => ({headerClass:"",bodyClass:""})}
        },
        data() {
            return {
                
            }
        }
    } 
</script>
<style scoped>
    
</style>
