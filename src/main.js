import { supabase } from './lib/supabaseClient'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//import { auth } from './firebase'

let app

if (!app) {
  app = createApp(App).use(store).use(router).mount('#app')
}

console.log('main.js: App is run')


// События хуков авторизации
const { data } = supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session)

  if (event === 'INITIAL_SESSION') {
    // handle initial session
  } else if (event === 'SIGNED_IN') {
    // handle sign in event
    store.commit('setAuthData', { type: 'userId', data: session.user.id })
    store.commit('setAuthData', { type: 'userEmail', data: session.user.email })
    router.push('/admin')
  } else if (event === 'SIGNED_OUT') {
    // handle sign out event
    store.commit('setAuthData', { type: 'userId', data: null })
    store.commit('setAuthData', { type: 'userEmail', data: null })
  } else if (event === 'PASSWORD_RECOVERY') {
    // handle password recovery event
  } else if (event === 'TOKEN_REFRESHED') {
    // handle token refreshed event
  } else if (event === 'USER_UPDATED') {
    // handle user updated event
  }
})

// Данные которые получаем для всех пользователей
store.dispatch('getItems', { type: 'sliders' })
store.dispatch('getItems', { type: 'zadachi' })
store.dispatch('getItems', { type: 'napravs' })
store.dispatch('getItems', { type: 'menus' })
store.dispatch('getItems', { type: 'collections' })
store.dispatch('getItems', { type: 'clients' })
store.dispatch('getItems', { type: 'contacts' })
store.dispatch('getItems', { type: 'prices' })
store.dispatch('getItems', { type: 'portfolios' })