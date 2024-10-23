import { supabase } from './../../lib/supabaseClient'

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
    setItems(state, { type, items }) {
      state[type] = items
    },
  },

  actions: {
    async removeItem({ commit }, { item }) {
      try {
        const { error } = await supabase
          .from(item.type)
          .delete()
          .eq('id', item.id)

        if (error) throw error
      } catch (error) {
        console.error('database.js removeItem()', error)
      }
    },

    async updateItem({ commit }, { item }) {
      try {
        console.log('database.js updateItem() item =', item)

        const { error } = await supabase
          .from(item.type)
          .update(item)
          .eq('id', item.id)

        if (error) throw error
      } catch (error) {
        console.error('database.js updateItem()', error)
      }
    },

    async addItem({ commit }, { item }) {
      try {
        const { error } = await supabase
          .from(item.type)
          .insert(item)

        if (error) throw error
      } catch (error) {
        console.error('database.js addItem()', error)
      }
    },

    async getItems({ commit }, { type }) {
      try {
        //console.log('database.js getItems() type =', type)
        const { data, error } = await supabase.from(type).select()
        if (error) throw error
        if (data) {
          commit('setItems', { type, items: data })
        }
      } catch (error) {
        console.error('database.js getItems()', error)
      }
    }
  },

  getters: {
    clients: state => state.clients,
    collections: state => state.collections,
    menus: state => state.menus,
    napravs: state => state.napravs,
    portfolios: state => state.portfolios,
    prices: state => state.prices,
    sliders: state => state.sliders,
    zadachi: state => state.zadachi,
    contacts: state => state.contacts
  }
}