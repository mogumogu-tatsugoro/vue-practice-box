import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Zoom from '../views/Zoom.vue'
import ElementUI from '../views/ElementUI.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/zoom',
    name: 'zoom',
    component: Zoom
  },
  {
    path: '/ElementUI',
    name: 'ElementUI',
    component: ElementUI
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
