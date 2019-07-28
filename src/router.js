import Vue from 'vue'
import Router from 'vue-router'
import OutDoors from './views/home'
import Contact from './views/contact'
import About from '././views/about.vue'
import TransitAd from './views/transit'
import Designing from './views/design'
import Media from './views/media'
import OurClient from './views/client'
import Printing from './views/print'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',       name: 'outdoors',   component: OutDoors},
    {path: '/about',  name: 'about',      component: About},
    {path: '/transit',name: 'transit',    component: TransitAd},
    {path: '/contact',name: 'contact',    component: Contact},
    {path: '/design',name: 'design',    component: Designing},
    {path: '/media',name: 'media',    component: Media},
    {path: '/client',name: 'client',    component: OurClient},
    {path: '/print',name: 'print',    component: Printing},
  ]
})
 