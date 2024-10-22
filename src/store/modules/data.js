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
    contacts: []
  },
  mutations: {
    updateImageFill(state, { collection, id, img }) {
      const index = state[collection].findIndex(col => col.id === id)
      let tempDoc = state[collection][index]
      tempDoc.img = img
      state[collection][index] = tempDoc
    },
    removeDoc(state, { collection, id }) {
      let tempDoc = state[collection].filter(doc => doc.id != id)
      state[collection] = tempDoc
    },
    updateDoc(state, { collection, doc }) {
      const index = state[collection].findIndex(col => col.id === doc.id)
      state[collection][index] = doc
    },
    addDoc(state, { collection, doc }) {
      state[collection].push(doc)
    },
    getData(state, { collections, collection }) {
      state[collection] = collections
    }
  },
  actions: {
    async updateImageFill({ commit }, { collection, id, img }) {
      try {
        await db.collection(collection).doc(id).update({ img })
        console.log('Поле img успешно обновлено')
        commit('updateImageFill', { collection, id, img })
      } catch (err) {
        //throw err
        console.log('Ошибка при обновлении поля img:', err)
      } finally {
      }
    },
    async removeDoc({ commit, dispatch }, { collection, id }) {
      try {
        await db.collection(collection).doc(id).delete()
        console.log('Документ успешно удален')
        commit('removeDoc', { collection, id })
      } catch (err) {
        //throw err
        console.log('Ошибка при удалении документа:', err)
      } finally {
      }
    },
    async updateDoc({ commit, dispatch }, { collection, doc }) {
      try {
        await db.collection(collection).doc(doc.id).update(doc)
        console.log('Документ успешно обновлен')
        commit('updateDoc', { collection, doc })
      } catch (err) {
        //throw err
        console.log('Ошибка при обновлении документа:', err)
      } finally {
      }
    },
    async addDoc({ commit }, { collection, doc }) {
      try {
        await db.collection(collection).doc(doc.id).set(doc, { merge: true })
        console.log('Документ успешно создан')
        commit('addDoc', { collection, doc })
      } catch (err) {
        //throw err
        console.log('Ошибка при создании документа:', err)
      } finally {
      }
    },
    async getData({ commit }, collection) {
      let collections = []
      try {
        const ref = db.collection(collection)
        const snapshot = await ref.orderBy('position').get()
        snapshot.forEach(doc => {
          collections.push(doc.data())
        });
        commit('getData', { collections, collection })
      } catch (err) {
        throw err
      } finally {
      }
    }
  },
  getters: {
    sliders: state => state.sliders,
    collections: state => state.collections,
    menus: state => state.menus,
    clients: state => state.clients,
    contacts: state => state.contacts,
    napravs: state => state.napravs,
    zadachi: state => state.zadachi,

    portfolios: state => state.portfolios,
    prices: state => state.prices
  }
}