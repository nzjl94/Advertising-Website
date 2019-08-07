<template>
    <div class="row">
        <containerCB 
            background="white" 
            grid="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center"
            height=""
        >
            <h3 class="text-center pb-3"><ins>Media</ins></h3>
            <p class="text-center">
                In these modern  times press in an  ingenious way to get your bussiness recognized.
                We offer newspaper, radio, magazine, and TV.
                Commercial ads. for you to choose from or you can choose them all!
            </p>
            <img src="../../assets/image/media/2.png" class="mx-auto d-block img-fluid">
            <b-button type="submit" id="getStarted" class=" py-3 mt-1 mt-4" >
                Get Started
            </b-button>
            <h3 class="text-center py-3">We can share your business at..</h3>
        </containerCB>
    
    </div>
</template>
<script>
    import containerCB  from '../general/containerColorBackground';
    export default {
      components:{
          containerCB
      }
    }
</script>
<style scoped>
    ins { 
      text-decoration:none;
      border-bottom: 3px solid red;
      padding-bottom: 5px;
    }
    #getStarted{
        padding-left: 100px;
        padding-right: 100px;
        background-color: rgb(193, 39, 45);
    }
</style>