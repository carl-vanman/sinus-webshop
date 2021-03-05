<template>
  <div class="product-list">
    <div class="top">
      <h2>PRODUCTS</h2>
      <select v-model="filter">
        <option>All products</option>
        <option>board</option>
        <option>wheels</option>
        <option>clothes</option>
      </select>
    </div>
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
      filter: 'All products',
    };
  },
  async created() {
    await this.$store.dispatch("getProducts");
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProductCategory(this.filter);
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

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

select {
  width: 250px;
  height: 40px;
  font-size: 18px;
  text-transform: uppercase;
  padding-left: 10px;
}
</style>