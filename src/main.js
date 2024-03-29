import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//change the base url to the backend lind I use the firebase for test purpose
axios.defaults.baseURL="";
axios.defaults.headers.common["Authorization"]="testVersion App";
axios.defaults.headers.get["Accepts"]="application/json";

axios.interceptors.request.use(config=>{
  console.log(config);
  return config;
});
axios.interceptors.response.use(res=>{
  console.log(res);
  return res;
});

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.use({
  install: function(Vue, options){
      Vue.prototype.$refs = require('jquery'); 
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
