<template>
    <div class="row py-3 px-0 mx-0">
        <containerCB 
            background="#c1272d" 
            grid="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-white text-center"
        >
            <h1 class="text-center text-white"><ins>Experience Matters</ins></h1>
            <p class="text-center">
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
        </containerCB>
        <containerIB 
            imgUrL="about/2.png"
            grid="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            opacity="0.8"
            height=""
        >
            <h1 class="text-center" style="color:gray;"><ins>Our Quality Standards</ins></h1>
            <p class="text-center" style="color:gray;">
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
<style scoped>
    ins { 
      text-decoration:none;
      border-bottom: 2px solid white;
      padding-bottom: 5px;
    }
</style>