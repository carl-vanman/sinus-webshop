<template>
  <div class="cart">
    <img src="../assets/cart.svg" alt="cart" @click="showCart = !showCart">
    <p v-if="getCartItems > 0" class="counter">{{ getCartItems }}</p>
    <CartList  v-if="showCart" />
    
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

};
</script>

<style scoped>


.counter {
  background-color: #fff;
  position: relative;
  top: -70px;
  width: 20px;
}
</style>>

