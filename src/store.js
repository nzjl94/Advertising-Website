import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeNavbar:true
  },
  getters:{
    getHomeNavbar: state =>{
      return state.homeNavbar
    }
  },
  mutations: {
    setHomeNavbar:state=>{
      state.homeNavbar=!state.homeNavbar;
    }
  },
  actions: {

  }
})
