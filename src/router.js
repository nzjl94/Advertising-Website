import Vue from 'vue'
import Router from 'vue-router'
import OutDoors from './views/OutDoors'
import Contact from './views/Contact'
import About from '././views/About.vue'
import TransitAd from './views/TransitAd'
import Designing from './views/Designing'
import Media from './views/Media'
import OurClient from './views/OurClient'
import Printing from './views/Printing'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //{path: '/',       name: 'outdoors',   component: OutDoors},
    {path: '/about',  name: 'about',      component: About},
    {path: '/transit',name: 'transit',    component: TransitAd},
    {path: '/contact',name: 'contact',    component: Contact},
    {path: '/design',name: 'design',    component: Designing},
    {path: '/media',name: 'media',    component: Media},
    {path: '/client',name: 'client',    component: OurClient},
    {path: '/print',name: 'print',    component: Printing},
  ]
})
 