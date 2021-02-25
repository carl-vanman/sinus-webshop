<template>
  <div class="productBoard">
    <div v-for="(product, index) in getProducts" :key="product._id">
      <Product @click.native="setActiveProduct(index)" :product="product" />
      <button @click="addToCart(product._id)" class="lägg i cart"> img<!-- <img src="#" alt="..."> --></button>
    </div>
    <div>
      <ProductModal :activeProduct="activeProduct"/>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
import {PRODUCTS_URL} from '@/api/api.js'
import ProductModal from './ProductModal.vue'

export default {
  components: { 
    Product,
    ProductModal, 
    },
    data() {
      return {
        activeProduct: {},
      }
    },
    async created() {
      await this.$store.dispatch('getProducts', PRODUCTS_URL)
    },
    computed: {
      getProducts(){
        return this.$store.getters.getProductList
      },
    },
    methods: {
      addToCart(id) {
        const url = `${PRODUCTS_URL}/${id}`
        this.$store.dispatch('getProduct', url)
      },
      setActiveProduct(index) {
        this.activeProduct = this.getProducts[index]
        console.log(this.activeProduct)
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