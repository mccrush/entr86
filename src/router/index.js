import { createRouter, createWebHistory } from 'vue-router'

import store from './../store'

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
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  //let currentUser = auth.currentUser

  const isLoggedIn = store._wrappedGetters.isLoggedIn
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // 3
  if (requiresAuth) {
    if (isLoggedIn) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})

export default router
