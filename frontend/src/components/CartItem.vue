<template>
  <div class="cart-product">
    <div class="first">
      <div class="img-background">
        <img :src="require(`../assets/${product.imgFile}`)" alt="..." />
      </div>

      <div class="middle">
        <h2>{{ product.title }}</h2>
        <p class="short">{{ product.shortDesc }}</p>
        <p class="id">{{ product._id }}</p>
      </div>
    </div>
    <div class="last">
      <h2>{{ product.price }}kr</h2>
      <p>
        <span @click="decrease">-</span> {{ product.amount }}st
        <span @click="increase">+</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    index: Number,
  },

  methods: {
    decrease() {
      this.$store.dispatch("removeProduct", this.index);
    },

    increase() {
      this.$store.dispatch("getProduct", this.product._id);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-product {
  display: flex;
  margin: 5% auto 5% auto;
  width: 90%;
  height: 70px;
  justify-content: space-between;
}

.img-background {
  width: 70px;
  height: 70px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
img {
  height: 60px;
}

.first {
  display: flex;
}

.middle {
  display: flex;
  height: 70px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 10px;

  p,
  h2 {
    margin: 0;
  }

  h2 {
    text-transform: uppercase;
  }
}

.short {
  font-size: 14px;
}

.short,
.id {
  color: rgba(0, 0, 0, 0.6);
}

.id {
  font-size: 10px;
}

.last {
  display: flex;
  height: 70px;
  flex-direction: column;
  justify-content: space-between;

  h2,
  p {
    margin: 0;
    font-weight: 400;
  }

  span:hover {
    cursor: pointer;
  }
}
</style>