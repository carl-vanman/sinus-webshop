import Vue from 'vue'
import Vuex from 'vuex'
import { get } from '@/api/api.js'
import { post } from '@/api/api.js'
import { ORDER_URL } from '@/api/api.js'
import { PRODUCTS_URL } from '@/api/api.js'
import { REGISTER_USER_URL } from '@/api/api.js'
import { LOGIN_USER_URL } from '@/api/api.js'
import { USER_URL } from '@/api/api.js'
import { setToken } from '@/api/api.js'
import { patch } from '@/api/api.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    cartItems: 0,
    cartPrice: 0,
    user: null,
    loginError: false,
    historyOrders: null,
    admin: false,
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
    getInlogUser(state) {
      return state.user
    },
    getLoginError(state) {
      return state.loginError
    },
    getHistoryOrders(state) {
      return state.historyOrders
    },
    getAdminStatus(state) {
      return state.admin
    }
  },

  mutations: {
    productList(state, products) {
      state.products = products
    },

    addProdcut(state, productObj) {
      state.cart.push(productObj)
      console.log(state.cart)
    },

    removeFromCart(state, index) {
      state.cart.splice(index, 1)
    },

    increaseAmount(state, index) {
      state.cart[index].amount++
    },

    decreaseAmount(state, index) {
      state.cart[index].amount--
    },

    addCartItem(state) {
      state.cartItems++
    },

    addToPrice(state, payload) {
      state.cartPrice += payload.price
    },

    removeCartItem(state) {
      state.cartItems--
    },

    removeFromPrice(state, index) {
      state.cartPrice -= state.cart[index].price
    },

    removeAllCartItem(state) {
      state.cart = [];
    },

    resetCartItems(state) {
      state.cartItems = 0;
    },

    resetCartPrice(state) {
      state.cartPrice = 0;
    },

    setUser(state, obj) {
      state.user = obj
    },

    setLoginError(state, bool) {
      state.loginError = bool
    },
    setHistoryOrders(state, arr) {
      state.historyOrders = arr
    },
    setAdmin(state) {
      state.admin = true
    }
  },

  actions: {
    async getProducts({ commit }) {
      const response = await get(PRODUCTS_URL)
      const products = response.data;
      commit('productList', products)
    },

    async getProduct(context, id) {
      const url = `${PRODUCTS_URL}/${id}`
      const response = await get(url)
      const product = response.data;

      context.commit('addCartItem')
      context.commit('addToPrice', product)

      let exists = false

      for (let i = 0; i < context.state.cart.length; i++) {
        if (context.state.cart[i]._id === product._id) {
          exists = true
          context.commit('increaseAmount', i)
          break;
        }
      }

      if (exists === false) {
        product.amount = 1
        context.commit('addProdcut', product)
      }
    },

    removeProduct(context, index) {
      context.commit('removeFromPrice', index)
      context.commit('removeCartItem')

      if (context.state.cart[index].amount === 1) {
        context.commit('removeFromCart', index)
      } else {
        context.commit('decreaseAmount', index)
      }
    },

    async registerOrder(context, obj) {

      /* ev. flytta till en getter? */

      obj.items = [];

      await context.getters.getCartList.forEach(item => {
        for (let i = item.amount; i > 0; i--) {
          obj.items.push(item._id)
        }
      });

      const response = await post(ORDER_URL, obj)
      console.log(response)
      context.commit('removeAllCartItem')
      context.commit('resetCartItems')
      context.commit('resetCartPrice')
    },

    async registerUser(context, obj) {
      const response = await post(REGISTER_USER_URL, obj)
      console.log(response)
      console.log(context)
    },

    async login(context, obj) {

      const response = await post(LOGIN_USER_URL, obj)
      if (response === 'error') {
        context.commit('setLoginError', true)
      } else {
        localStorage.setItem('token', response.data.token)
        context.commit('setLoginError', false)
        location.reload();
      }
    },

    async getUser({ commit }) {
      setToken(localStorage.getItem('token'))
      const response = await get(USER_URL)
      const user = response.data
      console.log(user)
      commit('setUser', user)

      if(user.role === "admin") {
        commit('setAdmin')
      }
    },

    async getOrders({ commit }) {
      setToken(localStorage.getItem('token'))
      const response = await get(ORDER_URL)
      const orders = response.data
      console.log(orders)
      commit('setHistoryOrders', orders)
    },

    async changeUser(context, obj) {
      const response = await patch(USER_URL, obj)
      console.log(response)
    },

    async changeProduct(context, obj) {
      const url = `${PRODUCTS_URL}/${obj._id}`
      const response = await patch(url, obj)
      console.log(response)
    }
  },
  modules: {
  },
})
