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
    removeDoc(state, { id, collection }) {
      let tempDoc = state[collection].filter(doc => doc.id != id)
      state[collection] = tempDoc
      console.log('state[collection]:', state[collection]);

    },
    updateDoc(state, { doc, collection }) {
      const index = state[collection].findIndex(col => col.id === doc.id)
      state[collection][index] = doc
    },
    addDoc(state, { doc, collection }) {
      state[collection].push(doc)
    },
    getData(state, { collections, collection }) {
      state[collection] = collections
    }
  },
  actions: {
    async removeDoc({ commit, dispatch }, { id, collection }) {
      try {
        await db.collection(collection).doc(id).delete()
      } catch (err) {
        //throw err
        console.log('Ошибка при удалении документа:', err)
      } finally {
        console.log('Документ успешно удален')
        commit('removeDoc', { id, collection })
      }
    },
    async updateDoc({ commit, dispatch }, { doc, collection }) {
      try {
        await db.collection(collection).doc(doc.id).update(doc)
      } catch (err) {
        //throw err
        console.log('Ошибка при обновлении документа:', err)
      } finally {
        console.log('Документ успешно обновлен')
        commit('updateDoc', { doc, collection })
      }
    },
    async addDoc({ commit }, { doc, collection }) {
      try {
        await db.collection(collection).doc(doc.id).set(doc, { merge: true })
      } catch (err) {
        //throw err
        console.log('Ошибка при создании документа:', err)
      } finally {
        console.log('Документ успешно создан')
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