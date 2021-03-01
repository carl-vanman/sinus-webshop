<template>
  <div class="cart">
    <img src="../assets/cart.svg" alt="cart" @click="showCart = !showCart">

    <p v-if="getCartItems > 0" class="counter">
      {{ getCartItems }}
    </p>
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
  }

};
</script>

<style scoped>


/* .counter {
  background-color: #fff;
  position: absolute;
  top: -70px;
  width: 20px;
} */

.cart-modal {
  position: fixed;
  background-color: #fff;
  width: 200px;
}
</style>>

