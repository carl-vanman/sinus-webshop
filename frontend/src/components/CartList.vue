<template>
  <div>
    <div class="cart-list">
      <div
        class="product"
        v-for="(product, index) in getCart"
        :key="product._id"
      >
        <CartItem :product="product" :index="index"/>
      </div>
      <p v-if="getCartPrice > 0">Total: {{ getCartPrice }}kr</p>
      
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  computed: {
    getCartPrice() {
      return this.$store.getters.getCartPrice;
    },
    getCart() {
      return this.$store.getters.getCartList;
    },
  },

  methods: {
    removeItem(i) {
      this.$store.dispatch("removeProduct", i);
    },
  },
};
</script>

<style scoped>
/* .cart-list {
  width: 500px;
} */
</style>