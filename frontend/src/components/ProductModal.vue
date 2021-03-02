<template>
  <article>
    <div class="wrapper">
      <!-- <img
        class="active-image"
        :src="require(`../assets/${activeProduct.imgFile}`)"
        alt="..."
      /> -->
      <h3>{{ activeProduct.title }}</h3>
      <p>{{ activeProduct.longDesc }}</p>
      <p>{{ activeProduct.price }}</p>
    </div>
    <button @click="addToCart(activeProduct._id)">
      <h2>Take my money!</h2>
    </button>
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
  },
};
</script>

<style scoped>
.active-image {
  width: 75%;
  height: 80%;
  object-fit: cover;
  padding-top: 1.5rem;
}

/* .wrapper {
  background: black;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
} */
</style>