import { db } from '@/main.js'

export default {
  state: {
    collections: []
  },
  mutations: {
    getCollections(state, collections) {
      state.collections = collections
    }
  },
  actions: {
    async getCollections({ commit }) {
      let collections = []
      try {
        const ref = db.collection('collections')
        const snapshot = await ref.get()
        snapshot.forEach(doc => {
          collections.push(doc.data())
        });
      } catch (err) {
        throw err
      } finally {
        commit('getCollections', collections)
        //console.log('collections:', collections) 
      }
    }
  },
  getters: {
    collections: state => state.collections
  }
}