import Vue from 'vue'
import Vuex from 'vuex'
import {get} from '@/api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    getProductList(state) {
      return state.products
    },
    getCartList(state) {
      return state.cart
    },
  },
  mutations: {
    PRODUCTS_LIST(state, products) {
      state.products = products
    },
    /* om tid finns, lägg till if statement, om produkten redan finns i cart add 1 */
    ADD_PRODUCT(state, productObj) {
      state.cart.push(productObj)
      console.log(state.cart)
    },
  },
  actions: {
    async getProducts({ commit }, url) {
      const response = await get(url)
      const products = response.data;
      commit('PRODUCTS_LIST', products)
    },
    async getProduct({ commit }, url) {
      const response = await get(url)
      const product = response.data;
      commit('ADD_PRODUCT', product)
    },
  },
  modules: {
  },
})
