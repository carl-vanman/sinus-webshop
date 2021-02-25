import Vue from 'vue'
import Vuex from 'vuex'
import { get } from '@/api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    cartItems: 0,
    cartPrice: 0
  },
  getters: {
    getProductList(state) {
      return state.products
    },
    getCartList(state) {
      return state.cart
    },
    getCartItems(state) {
      return state.cartItems
    },
    getCartPrice(state) {
      return state.cartPrice
    },
  },
  mutations: {
    PRODUCTS_LIST(state, products) {
      state.products = products
    },
    /* om tid finns, hitta en snyggare lösning */
    ADD_PRODUCT(state, productObj) {
      state.cartItems++
      state.cartPrice += productObj.price
      let exists = false
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i]._id === productObj._id) {
          exists = true
          console.log('finns')
          state.cart[i].amount++
          break;

        }
      }
      if (exists === false) {
        productObj.amount = 1
        state.cart.push(productObj)
        console.log(state.cart)
      }
    },

    REMOVE_FROM_CART(state, index) {
      state.cartPrice -= state.cart[index].price
      if (state.cart[index].amount === 1) {
        state.cartItems--
        state.cart.splice(index, 1)
      } else {
        state.cartItems--
        state.cart[index].amount--
      }
    }
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

    removeProduct({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  modules: {
  },
})
