<template>
  <div>
    <div class="test" v-for="(order, index) in historyOrders" :key="index">
      <ul>
        <li v-for="(items, index) in order.items" :key="index">
          <img
            class="history-img-preview"
            :src="require(`../assets/${items.imgFile}`)"
            alt="..."
          />
          <h2 class="item-title">{{ items.title }}</h2>
          <p class="item-price">{{ items.price }} <span>SEK</span></p>
          <p>{{ items.amount }}<span class="amount">st</span></p>
        </li>
      </ul>
    </div>
    <!-- {{ historyOrders }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyOrders: null,
    };
  },
  created() {
    let orders = this.$store.getters.getHistoryOrders;
    this.historyOrders = orders;
  },
};
</script>

<style lang="scss" scoped>
.history-img-preview {
  width: 60px;
  height: 60px;
}

li:nth-child(odd) {
  background: lightgrey;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  margin-bottom: 5px;
}

ul {
  list-style: none;
}
.amount {
  font-size: 14px;
  text-transform: lowercase;
}

h2,
p {
  text-transform: uppercase;
}
</style>