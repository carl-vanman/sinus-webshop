<template>
  <article v-if="activeProduct.active">
    <div class="product-mask" @click="disableActive">
      <div class="product-container">
        <div class="left-box">
          <img
            class="image"
            :src="require(`@/assets/${activeProduct.imgFile}`)"
            alt="..."
          />
        </div>
        <div class="right-box">
          <h2 class="title">{{ activeProduct.title }}</h2>
          <p class="short-desc">{{ activeProduct.shortDesc }}</p>
          <p class="long-desc">{{ activeProduct.longDesc }}</p>
          <p class="price">{{ activeProduct.price }}</p>
          <button @click="addToCart(activeProduct._id)">
<<<<<<< HEAD
            <h2>Take my para!</h2>
=======
            <h2>Take my Money!</h2>
>>>>>>> c77707491139c92987bd37a4dec941475a5eba47
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    activeProduct: Object,
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("getProduct", id);
    },
    disableActive() {
      this.$emit("disableActive");
    },
  },
};
</script>

<style scoped>
.product-mask {
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.image {
  width: 356px;
  height: 100%;
  top: 33px;
  left: 46px;
}

.product-container {
  display: grid;
  grid-template-columns: 384px 384px;
  height: 508px;
  background: white;
}

.left-box {
  background: lightgrey;
}

.right-box {
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
}

button {
  align-self: center;
  margin-top: auto;
  border-radius: 50px;
  background: #000;
  color: #fff;
  width: 202px;
  height: 48px;
  font-style: normal;
  size: 18px;
}
</style>