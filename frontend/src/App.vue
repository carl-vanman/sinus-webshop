<template>
  <div id="app">
    <div class="wrapper">
      <div id="nav">
        <Nav />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
:root {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body {
  background-color: #eeeeee;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: grid;
  grid-template-columns: 1fr minmax(900px, 1064px) 1fr;

  .wrapper {
    grid-column: 2 / -2;
  }
}
</style>
