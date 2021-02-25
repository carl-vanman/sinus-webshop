<template>
  <div class="cart">
    <button @click="showCart = !showCart">Cart</button>
    <p v-if="getCartItems > 0">{{ getCartItems }}</p>
    <div class="cart-modal" v-if="showCart">
      <div
        class="product"
        v-for="(product, index) in getCart"
        :key="product._id"
        @click="removeItem(index)"
      >
        <CartItem :product="product" />
      </div>
      <p v-if="getCartItems > 0">Total: {{ getCartPrice }}kr</p>
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
    getCart() {
      return this.$store.getters.getCartList;
    },
    getCartItems() {
      return this.$store.getters.getCartItems;
    },
    getCartPrice() {
      return this.$store.getters.getCartPrice;
    },
  },
  data() {
    return {
      showCart: false,
    };
  },

  methods: {
    removeItem(i) {
      this.$store.dispatch("removeProduct", i);
    },

    goToCheckout() {
      this.showCart = false;
      this.$router.push("/checkout");
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
</style>>

