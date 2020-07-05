import Vue from 'vue'
import VueRouter from 'vue-router'
import Price from '../views/Price.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/price',
    name: 'price',
    component: Price
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
  // scrollBehavior() {
  //   return { x: 0, y: 0 }
  // }
})

export default router
