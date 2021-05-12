import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Detail" */ '../views/Detail.vue')
  },
  {
    path: '/side',
    name: 'Side',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Side" */ '../views/Side.vue')
  },
  {
    path: '/privacypolicy',
    name: 'Privacypolicy',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Privacypolicy" */ '../views/Privacypolicy.vue')
  },
  {
    path: '/useragreement',
    name: 'Useragreement',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Useragreement" */ '../views/Useragreement.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
