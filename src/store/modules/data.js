import { db } from '@/main.js'

export default {
  state: {
    clients: [],
    collections: [],
    menus: [],
    napravs: [],
    portfolios: [],
    prices: [],
    sliders: [],
    zadachi: [],
  },
  mutations: {
    addDoc(state, { doc, collection }) {
      state[collection].push(doc)
    },
    getData(state, { collections, collection }) {
      state[collection] = collections
    }
  },
  actions: {
    async updateDoc({ commit }, { doc, collection }) {
      try {
        await db.collection(collection).doc(doc.id).update(doc)
      } catch (err) {
        throw err
      } finally {
        commit('updateDoc', { doc, collection })
      }
    },
    async addDoc({ commit }, { doc, collection }) {
      try {
        await db.collection(collection).doc(doc.id).set(doc, { merge: true })
      } catch (err) {
        throw err
      } finally {
        commit('addDoc', { doc, collection })
      }
    },
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
    clients: state => state.clients,
    menus: state => state.menus,
    napravs: state => state.napravs,
    portfolios: state => state.portfolios,
    prices: state => state.prices,
    sliders: state => state.sliders,
    zadachi: state => state.zadachi,
  }
}