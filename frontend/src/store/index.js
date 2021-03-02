import Vue from 'vue'
import Vuex from 'vuex'
import { get } from '@/api/api.js'
import { post } from '@/api/api.js'
import { ORDER_URL } from '@/api/api.js'
import { PRODUCTS_URL } from '@/api/api.js'


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
    /* getCartItemsId(state) {
      return state.cart.map(item => {
        if (item.amount > 1) {
          for (let i = item.amount; i > 0; i--) {
            console.log('hej')
            return item._id
          }
        } else {
        return item._id
        }
      })
    } */
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
    },

    removeAllCartItem(state) {
      state.cart = [];
    },

    resetCartItems(state) {
      state.cartItems = 0;
    },

    resetCartPrice(state) {
      state.cartPrice = 0;
    }
  },

  actions: {
    async getProducts({ commit }, url) {
      const response = await get(url)
      const products = response.data;
      commit('PRODUCTS_LIST', products)
    },

    async getProduct(context, id) {
      const url = `${PRODUCTS_URL}/${id}`
      const response = await get(url)
      const product = response.data;

      context.commit('ADD_CART_ITEM')
      context.commit('ADD_TO_PRICE', product)

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

    async registerOrder(context, obj) {

      /* ev. flytta till en getter? */

      obj.items = [];
      
      await context.getters.getCartList.forEach(item => {
        for(let i = item.amount; i > 0; i--){
          obj.items.push(item._id)
        }
      });

      const response = await post(ORDER_URL, obj)
      console.log(response)
      context.commit('removeAllCartItem')
      context.commit('resetCartItems')
      context.commit('resetCartPrice')
    }
  },
  modules: {
  },
})
