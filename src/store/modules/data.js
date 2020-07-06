import { db } from '@/main.js'

export default {
  state: {
    collections: [],
    sliders: [],
    zadachi: []
  },
  mutations: {
    getData(state, { collections, collection }) {
      state[collection] = collections
    }
  },
  actions: {
    async getData({ commit }, collection) {
      let collections = []
      try {
        const ref = db.collection(collection)
        const snapshot = await ref.get()
        snapshot.forEach(doc => {
          collections.push(doc.data())
        });
      } catch (err) {
        throw err
      } finally {
        commit('getData', { collections, collection })
        //console.log('collections:', collections) 
      }
    }
  },
  getters: {
    collections: state => state.collections,
    sliders: state => state.sliders,
    zadachi: state => state.zadachi
  }
}