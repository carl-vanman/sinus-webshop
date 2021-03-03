<template>
  <div>
    <div v-for="(order, index) in historyOrders" :key="index">
      {{ order._id }}
      <ul>
        <li v-for="(items, index) in order.items" :key="index">
          {{ items.title }}
        </li>
      </ul>
    </div>
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

<style>
</style>