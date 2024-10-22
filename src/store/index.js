import { createStore } from 'vuex'
//import data from './modules/data'
//import user from './modules/user'
import message from './modules/message'

import auth from './modules/auth'
import database from './modules/database'

export default createStore({
  modules: {
    message,
    auth,
    database,
  }
})
