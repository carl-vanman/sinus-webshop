<template>
  <div class="cart">
    <img src="../assets/cart.svg" alt="cart" @click="showCart = !showCart" />
    <div class="counter" v-if="getCartItems > 0">
      <p>
        {{ getCartItems }}
      </p>
    </div>
    <div class="cart-modal" v-if="showCart">
      <CartList />

      <button v-if="getCartItems > 0" @click="goToCheckout">
        Take my money!
      </button>
      <p v-else>Varukorgen är tom :(</p>
    </div>
  </div>
</template>

<script>
import CartList from "../components/CartList.vue";
export default {
  components: {
    CartList,
  },
  computed: {
    getCartItems() {
      return this.$store.getters.getCartItems;
    },
  },
  data() {
    return {
      showCart: false,
    };
  },

  methods: {
    goToCheckout() {
      this.showCart = false;
      this.$router.push("/checkout");
    },
  },
};
</script>

<style scoped>
.cart {
  position: relative;
}
.counter {
  background-color: #fff;
  position: absolute;
  top: -20%;
  left: 70%;
  width: 20px;
  border-radius: 50%;
  font-size: 14px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-modal {
  position: fixed;
  background-color: #fff;
  width: 200px;
}
</style>>

