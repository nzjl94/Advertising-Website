<template>
    <main-container></main-container>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import mainContainer from '../components/home/mainContainer';
  export default {
    components: {
      mainContainer
    },
    methods:{
      ...mapMutations([
        "setHomeNavbar"
      ])
    },
    computed:{
        ...mapGetters([
          'getHomeNavbar'
        ])
    },
    created (){
      this.setHomeNavbar();
    },
    destroyed() {
      this.setHomeNavbar();
    }
  }
</script>
