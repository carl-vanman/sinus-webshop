<template>
  <div class="cart-product">
    <img :src="require(`../assets/${product.imgFile}`)" alt="..." width="50" />
    <p>{{ product.amount }}st {{ product.title }}</p>
    <p>{{ product.shortDesc }}</p>
    <p>{{ product._id }}</p>
    <p>{{ product.price }}kr</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
};
</script>

<style scoped>
</style>