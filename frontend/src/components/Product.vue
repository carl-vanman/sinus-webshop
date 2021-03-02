<template>
  <!-- leta upp require -->
  <div class="product">
    <div class="top">
      <h2>{{ product.title }}</h2>
      <p>{{ product.shortDesc }}</p>
    </div>
    <div class="price">
      <p>{{ product.price }}</p>
      <p class="sek">SEK</p>
    </div>
    <div class="bottom">
      <img :src="require(`../assets/${product.imgFile}`)" alt="..." />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped lang="scss">
.product {
  width: 100%;
  height: 450px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.top {
  text-align: start;
  margin: 20px 25px;

  h2 {
    margin-bottom: 4px;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
  }

  h2,
  p {
    margin-top: 0;
  }

  p {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.6);
  }
}

img {
  height: 315px;
  margin-bottom: -5px;
}

.price {
  position: absolute;
  top: 380px;
  left: 5%;
  background-color: #000000;
  border-radius: 50px;
  display: flex;
  color: #fff;
  font-size: 28px;
  width: 122px;
  height: 47px;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    font-size: 700;
  }
  .sek {
    font-size: 14px;
    margin-left: 5px;
    margin-top: -5px;
    font-size: 400;
  }
}
</style>