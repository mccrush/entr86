import { createStore } from 'vuex'
import data from './modules/data'
import user from './modules/user'
import message from './modules/message'

export default createStore({
  modules: {
    data,
    user,
    message
  }
})
