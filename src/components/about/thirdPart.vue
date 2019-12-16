<template>
    <div class="row">
        <containerCB 
          grid="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          classes="backgroundContainer backgroundColorContainer"
        >
            <h1 class="firstBlockHeader"><ins class="firstBlockHeaderIns">Experience Matters</ins></h1>
            <p class="firstBlockMainText">
              We’re not considered outdoor advertising experts for no reason. Our team of experienced
              consultants, planners and buyers consolidate and analyze the myriad of available outdoor 
              advertising units and out-of-home media options in each and every market to deliver 
              customized campaigns. With over 8 years of experience in the outdoor advertising and media 
              field.
            </p>
            <div style="text-align:left;margin-left:30%;">
              <p class="footerText">WE.</p>
              <p class="footerText" style="margin-left:8%;">MAKE <span style="font-weight: bold;">YOUR BRAND</span></p>
              <p class="footerText">TO STAND OUT</p>   
            </div>
        </containerCB>
        <containerIB 
            imgUrL="about/2.png"
            grid="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            opacity="0.8"
            classes="backgroundContainer"
        >
            <h1 class="secondBlockHeader" ><ins class="secondBlockHeaderIns">Our Quality Standards</ins></h1>
            <p class="secondBlockContentText">
              To make our customer feel safe and sure with the quality of advertising we offer.
              <ul class="dashed">
                <li>We aim high to achieve the best possible campaign for our clients in this competitive market.</li>
                <li>We utilize all talents of our associates to advertising for your business as easy as can be.</li>
                <li>We are there for our clients in everything they need, with a creative staff and unmatched loyalty.</li>
                <li>We get your company recognized with many different types of advertising outlets, from outdoor items, to media exposure. </li>
                <li>We make our client our top priority, with their best interest at heart.</li>
              </ul>
            </p>
        </containerIB>
    </div>
</template>
<script>
    import '@fortawesome/fontawesome-free/css/all.css'
    import Icons from '../general/icons'
    import containerCB  from '../general/containerColorBackground';
    import containerIB  from '../general/containerImageBackground';
    export default {
      components:{
          Icons,
          containerCB,
          containerIB
      }
    }
</script>
<style scoped lang="scss">
      @import "../../assets/style/components/about/thirdPart.scss";
</style>