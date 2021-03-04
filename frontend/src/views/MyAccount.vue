<template>
  <div>
    <section>
      <h2 class="orderz">account details</h2>
      <div class="account-details">
        <p>{{ userDetails.name }}</p>
        <p>{{ userDetails.email }}</p>
        <p>{{ userDetails.address.street }}</p>
        <p>{{ userDetails.address.zip }} {{ userDetails.address.city }}</p>
        <!-- <p>{{ userDetails }}</p> -->
      </div>
    </section>
    <section v-if="userDetails.role === 'customer'">
      <h2 class="orders">orders history</h2>
      <div
        class="order-separators"
        v-for="(order, index) in historyOrders"
        :key="index"
      >
        <h3>
          Order id: <span class="order_id">{{ order._id }}</span>
        </h3>
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
            <p class="item-title">{{ items._id }}</p>
          </li>
        </ul>
      </div>
    </section>
    <!-- {{ historyOrders }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyOrders: null,
      userDetails: null,
    };
  },
  created() {
    let orders = this.$store.getters.getHistoryOrders;
    let user = this.$store.getters.getInlogUser;
    console.log(user);
    this.historyOrders = orders;
    this.userDetails = user;
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

li:hover {
  background-color: slateblue;
  color: #fff;
}

li {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
}

ul {
  padding: 0;
  list-style: none;
}
.amount {
  font-size: 14px;
  text-transform: lowercase;
}

h2,
p,
h3 {
  text-transform: uppercase;
}

h3 {
  text-align: start;
  color: lightgrey;
}

.orders {
  text-align: start;
}

.order-separators {
  border-top: 1px solid #2c3e50;
}

.account-details {
  background: #fff;
  text-align: start;
  padding: 15px;
  font-weight: bold;
}
</style>