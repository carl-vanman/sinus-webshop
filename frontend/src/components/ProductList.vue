<template>
  <div class="productBoard">
    <div v-for="product in products" :key="product._id">
      <Product :product="product" />
      <button class="lägg i cart"> img<!-- <img src="#" alt="..."> --></button>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
import {PRODUCTS_URL, get} from '@/api/api.js'

export default {
  components: { 
    Product, 
    },
    data() {
      return {
        products: []
      }
    },
    async created() {
      const response = await get(PRODUCTS_URL)
      this.products = response.data;
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