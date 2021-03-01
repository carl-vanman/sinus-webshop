<template>
  <div>
    <div class="cart-list">
      <div
        class="product"
        v-for="(product, index) in getCart"
        :key="product._id"
      >
        <CartItem :product="product" :index="index" />
      </div>
      <div class="total" v-if="getCartPrice > 0">
        <p>Total:</p>
        <p class="bold">
          <b>{{ getCartPrice }}kr</b>
        </p>
      </div>
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

<style lang="scss" scoped>
.total {
  width: 90%;
  margin: 5px auto auto auto;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #eeeeee;
  font-size: 18px;
  text-transform: uppercase;

  p {
    margin-top: 5px;
  }
}
</style>