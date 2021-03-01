<template>
  <div id="app">
    <div id="nav">
      <Nav />
   
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue"
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
:root {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body {
background-color: #EEEEEE;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}


</style>
