import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/myaccount',
    name: 'My Account',
    component: () => import('../views/MyAccount.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/OrderConfirmed',
    name: 'OrderConfirmed',
    component: () => import('../views/OrderConfirmed.vue')
  },
  /* {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue')
  }, */
  {
    path: '/admin-products',
    name: 'Admin Products',
    component: () => import('../views/AdminProducts.vue')
  },
  {
    path: '/admin-orders',
    name: 'Admin Orders',
    component: () => import('../views/AdminOrders.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
