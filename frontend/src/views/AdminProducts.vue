<template>
  <div class="admin-products">
    <h2>Admin products</h2>
    <div class="add-edit">
      <p>Add / Edit</p>
      <hr />
    </div>
    <AddProduct :productToEdit="productToEdit"/>
    <div class="product-list">
      <div v-for="(product, index) in getProducts" :key="product._id" class="item">
        <Product :product="product" />
        <img
          src="@/assets/edit-icon.svg"
          alt="edit"
          @click="editProduct(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import AddProduct from "@/components/AddProduct.vue";
export default {
  components: {
    Product,
    AddProduct,
  },

  async created() {
    await this.$store.dispatch("getProducts");
  },

  computed: {
    getProducts() {
      return this.$store.getters.getProductList;
    },
  },

  data() {
      return{
          productToEdit: {}
      }
  },

  methods: {
      editProduct(index) {
      this.productToEdit = this.getProducts[index]
    },
  }
};
</script>

<style lang="scss" scoped>
h2 {
    text-transform: uppercase;
    text-align: start;
}
.add-edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 16px;  
      color: rgba(0, 0, 0, 0.6);
    }

    hr {
        width: 92%;
        border-top: 1px solid rgba(0, 0, 0, 0.6);
        border-left: none;
        margin: 0;
    }

}
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;

  .item {
    position: relative;

    img {
      border: none;
      position: absolute;
      top: 20px;
      left: 80%;
    }

    img:hover {
      cursor: pointer;
    }
  }
}
</style>