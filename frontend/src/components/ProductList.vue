<template>
  <div class="productBoard">
    <div
      v-for="(product, index) in getProducts"
      :key="product._id"
      class="item"
    >
      <Product @click.native="setActiveProduct(index)" :product="product" />
      <button @click="addToCart(product._id)">
        <img src="@/assets/icon-bag-black.svg" alt="" />
      </button>
    </div>
    <div>
      <ProductModal
        v-on:disableActive="disable"
        :activeProduct="activeProduct"
      />
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import ProductModal from "./ProductModal.vue";

export default {
  components: {
    Product,
    ProductModal,
  },
  data() {
    return {
      activeProduct: {},
    };
  },
  async created() {
    await this.$store.dispatch("getProducts");
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProductList;
    },
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("getProduct", id);
    },
    setActiveProduct(index) {
      this.activeProduct = this.getProducts[index];
      this.activeProduct.active = true;
      console.log(this.activeProduct);
    },
    disable() {
      this.activeProduct = {};
      console.log(this.activeProduct);
    },
  },
};
</script>

<style scoped lang="scss">
.productBoard {
  display: grid;
  /* nedan för auto-fill */
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;

  .item {
    position: relative;

    button {
      border: none;
      border-radius: 50%;
      background-color: #eeeeee;
      position: absolute;
      top: 20px;
      left: 80%;
      width: 44px;
      height: 44px;
    }

    button:hover {
      cursor: pointer;
      background-color: #cecbcb;
    }

    button:focus {
      outline: none;
    }
  }
}
</style>