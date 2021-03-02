<template>
  <div class="home">
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
</style>