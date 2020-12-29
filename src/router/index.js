//import Vue from 'vue'
//import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from "@/main.js";

//Vue.use(VueRouter)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('../views/Price.vue')
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
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: () => import('../views/NotFound.vue')
    }
  ]
})


// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     if (to.hash) {
//       return { selector: to.hash }
//     } else {
//       return { x: 0, y: 0 }
//     }
//   }
// })

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // 3
  if (requiresAuth) {
    if (currentUser) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})

export default router
