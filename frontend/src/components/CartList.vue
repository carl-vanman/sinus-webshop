<template>
  <div>
    <div class="cart-modal">
      <div
        class="product"
        v-for="(product, index) in getCart"
        :key="product._id"
        @click="removeItem(index)"
      >
        <CartItem :product="product" />
      </div>
      <p v-if="getCartPrice > 0">Total: {{ getCartPrice }}kr</p>
      <button v-if="getCart.length > 0" @click="goToCheckout">
        Take my money!
      </button>
      <p v-else>Varukorgen är tom :(</p>
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
    goToCheckout() {
      this.showCart = false;
      this.$router.push("/checkout");
    },
    removeItem(i) {
      this.$store.dispatch("removeProduct", i);
    },
  },
};
</script>

<style scoped>
.cart-modal {
  position: fixed;
  background-color: #fff;
  width: 200px;
}
</style>