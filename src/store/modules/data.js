import { db } from '@/main.js'

export default {
  state: {
    collections: []
  },
  mutations: {},
  actions: {
    async getCollections() {
      let collections = []
      try {
        const ref = db.collection('collections')
        const snapshot = await ref.get()
        snapshot.forEach(doc => {
          collections.push(doc.data())
        });
      } catch (err) {
        throw err
      } finally { console.log('collections:', collections) }
    }
  },
  getters: {}
}