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
        <img src="@/assets/icon-bag-white.svg" alt="bag icon" />
        Take my money!
      </button>

      <p v-else>Your cart is empty</p>
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

<style lang="scss" scoped>
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
  position: absolute;
  background-color: #fff;
  width: 350px;
  left: -670%;
  top: 60px;
}

.cart-modal::before {
  content: "";
  width: 20px;
  height: 10px;
  background-color: white;

  position: absolute;
  top: -10px;
  right: 23px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

button {
  background-color: #000;
  color: #fff;
  margin: 20px auto 30px auto;
  border-radius: 50px;
  width: 210px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 10px;
  }
}

button:hover {
  cursor: pointer;
}
</style>>

