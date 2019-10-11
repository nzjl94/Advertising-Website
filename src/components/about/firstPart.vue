<template>
    <div class="row">
        <containerCB 
            background="white" 
            height=""
            grid="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center"
        >
            <h2 class="headerText"><ins class="insClass">OUR VISION</ins></h2>
            <p class="maintext">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in 
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in 
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus.
            </p>
            <b-button type="submit"  variant="outline-danger" class="mainBotton" >
                <Icons iconName="file-alt" iconStyle="color:rgb(193, 39, 45);border: solid 0px rgb(193, 39, 45);" iconSize="lg"/>
                Read our Profile Company
            </b-button>
        </containerCB>
    </div>
    
</template>
<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Icons from '../general/icons'
    import containerCB  from '../general/containerColorBackground';
  export default {
    components:{
      containerCB,
      Icons
    }
  }
</script>
<style  lang="scss" scoped>
  @import "../../assets/style/components/about/firstPart.scss";
</style>