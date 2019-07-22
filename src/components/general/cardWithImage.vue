<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 m-0">
    <b-card
        :img-src="imgUrL"
        img-alt="Image"
        img-top
        class="text-center"
      >
        <b-card-body>
          <b-card-title class="text-danger" title-tag="h2">{{mHeader}}</b-card-title>
          <b-card-text tag="article" >
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
            imgUrL: {type: String,default:"https://picsum.photos/600/300/?image=25"}
        },
        data() {
            return {
                
            }
        }
    } 
</script>
<style scoped>
    
</style>
