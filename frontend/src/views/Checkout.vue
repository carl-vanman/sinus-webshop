<template>
  <div>
    <div class="cart">
      <h2>Your Cart</h2>
      <h4>Items</h4>
      <CartList />
    </div>
    <div>
      <h4>Delivery</h4>
      <h4>Payment Details</h4>
      <CheckoutForm />
    </div>
  </div>
</template>

<script>
import CartList from '../components/CartList.vue';
import CheckoutForm from '../components/CheckoutForm.vue';
export default {
  components: { 
    CheckoutForm,
    CartList 
    },
};
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
  }
  .cart{
    background-color: rosybrown;
  }
</style>