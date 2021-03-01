<template>
  <div class="nav">
    <img src="@/assets/sinus-logo.svg" alt="" />
    <div class="right">
      <router-link to="/">Products</router-link>
      <router-link to="/register">Register</router-link>
      <LogIn class="margin"/>
      <Cart />
    </div>
  </div>
</template> 

<script>
import Cart from "@/components/Cart.vue";
import LogIn from "@/components/LogIn.vue";
export default {
  components: {
    Cart,
    LogIn,
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 2% auto 2% auto;
}

img {
  height: 60px;
}

.right {
  display: flex;
  align-items: center;
}

a {
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
  text-decoration: none;
  margin-right: 40px;

  &.router-link-exact-active {
    font-weight: bold;
  }
}

.margin {
    margin-right: 20px;
}
</style>