<template>
  <article v-if="activeProduct.active">
    <div class="product-mask" @click="disableActive">
      <div class="product-container">
        <div class="primary-container">
          <img
            class="image"
            :src="require(`@/assets/${activeProduct.imgFile}`)"
            alt="product-picture"
          />
        </div>
        <div class="secondary-container">
          <h2 class="title">{{ activeProduct.title }}</h2>
          <p class="short-desc">{{ activeProduct.shortDesc }}</p>
          <p class="long-desc">{{ activeProduct.longDesc }}</p>
          <p class="price">{{ activeProduct.price }} SEK</p>
          <button @click="addToCart(activeProduct._id)">
            <img src="@/assets/icon-bag-white.svg" alt="" />
            <h2>Take my money!</h2>
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

<style scoped lang="scss">
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

.primary-container {
  background: #e5e5e5;
  height: 508px;
}

.secondary-container {
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
}

.title {
  font-style: normal;
  font-size: 32px;
  line-height: 44px;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 0;
}

.short-desc {
  font-size: 22px;
  line-height: 30px;
  margin-top: 0;
  color: rgba(0, 0, 0, 0.6);
}

.long-desc {
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
}

.price {
  font-size: 26px;
  line-height: 35px;
  font-weight: bold;
  margin-bottom: 58px;
}

button {
  background-color: #000;
  border-radius: 50px;
  font-weight: normal;
  color: #fff;
  width: 210px;
  height: 50px;
  border: none;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
  cursor: pointer;
}

.image {
  width: 350px;
  height: auto;
  margin-top: 25%;
}
</style>