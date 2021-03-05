<template>
  <div>
    <section v-if="!edit">
      <h2 class="orders">account details</h2>
      <div class="account-details">
        <p>{{ userDetails.name }}</p>
        <p>{{ userDetails.email }}</p>
        <p>{{ userDetails.address.street }}</p>
        <p>{{ userDetails.address.zip }} {{ userDetails.address.city }}</p>
        <button @click="edit = !edit">EDIT</button>
        <!-- <p>{{ userDetails }}</p> -->
      </div>
    </section>
    <section v-else>
      <h2 class="orders">edit account details</h2>
      <div class="edit">
        <form>
          <label for="name">Name</label>
          <input v-model="userDetails.name" type="text" name="name" />

          <label for="email">Email</label>
          <input v-model="userDetails.email" type="email" name="email" />

          <label for="street">Street Address</label>
          <input
            v-model="userDetails.address.street"
            type="text"
            name="street"
          />
          <div class="row">
            <label for="zipCode">Zip Code</label>
            <input v-model="userDetails.address.zip" type="text" name="zip" />

            <label for="city">City</label>
            <input v-model="userDetails.address.city" type="text" name="city" />
          </div>

          <button @click="editUser">SAVE</button>
        </form>
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
      edit: false,
    };
  },
  created() {
    let orders = this.$store.getters.getHistoryOrders;
    let user = this.$store.getters.getInlogUser;
    console.log(user);
    this.historyOrders = orders;
    this.userDetails = user;
  },

  methods: {
    editUser() {
      this.$store.dispatch("changeUser", this.userDetails);
      console.log(this.userDetails);
      this.edit = false;
    },
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
.edit {
  background: #fff;
  text-align: start;
  padding: 15px;
  font-weight: bold;
}
form {
  width: 200px;
  display: flex;
  flex-direction: column;
}
</style>