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

    ADD_PRODUCT(state, productObj) {
      state.cart.push(productObj)
      console.log(state.cart)
    },

    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1)
    },

    increaseAmount(state, index) {
      state.cart[index].amount++
    },

    decreaseAmount(state, index) {
      state.cart[index].amount--
    },

    ADD_CART_ITEM(state) {
      state.cartItems++
    },

    ADD_TO_PRICE(state, payload) {
      state.cartPrice += payload.price
    },

    removeCartItem(state) {
      state.cartItems--
    },

    removeFromPrice(state, index) {
      state.cartPrice -= state.cart[index].price
    }
  },

  actions: {
    async getProducts({ commit }, url) {
      const response = await get(url)
      const products = response.data;
      commit('PRODUCTS_LIST', products)
    },

    async getProduct(context, url) {
      const response = await get(url)
      const product = response.data;

      context.commit('ADD_CART_ITEM')
      context.commit('ADD_TO_PRICE', product)

      let exists = false

      for (let i = 0; i < context.state.cart.length; i++) {
        if (context.state.cart[i]._id === product._id) {
          exists = true
          console.log('finns')
          context.commit('increaseAmount', i)
          break;

        }
      }
      if (exists === false) {
        product.amount = 1
        context.commit('ADD_PRODUCT', product)
      }
    },

    removeProduct(context, index) {
      context.commit('removeFromPrice', index)
      context.commit('removeCartItem')

      if (context.state.cart[index].amount === 1) {
        context.commit('REMOVE_FROM_CART', index)
      } else {
        context.commit('decreaseAmount', index)
      }
    },
  },
  modules: {
  },
})
