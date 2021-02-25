<template>
  <div class="productBoard">
    <div v-for="product in products" :key="product._id">
      <Product :product="product" />
      <button @click="addToCart(product._id)" class="lägg i cart"> img<!-- <img src="#" alt="..."> --></button>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
import {PRODUCTS_URL} from '@/api/api.js'

export default {
  components: { 
    Product, 
    },
    data() {
      return {
      }
    },
    async created() {
      await this.$store.dispatch('getProducts', PRODUCTS_URL)
    },
    computed: {
      products(){
        return this.$store.getters.getProductList
      },
    },
    methods: {
      addToCart(id) {
        const url = `${PRODUCTS_URL}/${id}`
        this.$store.dispatch('getProduct', url)
      }
    }

}
</script>

<style scoped lang="scss">
  .productBoard {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
</style>