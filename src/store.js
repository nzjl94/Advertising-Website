import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeNavbar:true,
    clintHeaderData:{"title":"Our Clients","content":"We do Best, We made them Happy!","link":"client/1.png"}
  },
  getters:{
    getHomeNavbar: state =>{
      return state.homeNavbar
    },
    getClintHeaderData: state =>{
      return state.clintHeaderData
    }
  },
  mutations: {
    setHomeNavbar:state=>{
      state.homeNavbar=!state.homeNavbar;
    },
    setClintHeaderData:(state,data)=>{
      //console.log(data);
      state.clintHeaderData=data;
    }
  },
  actions: {

  }
})
