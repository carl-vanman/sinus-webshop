<template>
  <div class="flexContainer">
    <!-- <div class="cart">
      <CartList />
    </div> -->
    <div>
      <CheckoutForm />
    </div>
  </div>
</template>

<script>
/* import CartList from '../components/CartList.vue'; */
import CheckoutForm from '../components/CheckoutForm.vue';
export default {
  components: { 
    CheckoutForm,
    /* CartList  */
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

  .flexContainer {
    display: flex;
  }
</style>