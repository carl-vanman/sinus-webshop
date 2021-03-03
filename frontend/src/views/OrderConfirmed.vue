<template>
  <div>

      <!-- ta in bild från unsplash? -->

    <section class="top">
        <h2>Thank you!</h2>
    </section>
    <section class="main">
      <h2>Your order is beeing processed</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, quae?
        Placeat ad magnam aperiam eum sit eligendi error, sapiente aut
        consectetur quod praesentium molestias. Minima, assumenda. Aspernatur
        sapiente a expedita.
      </p>
    </section>
    <button @click.prevent="backHome">
        Shop more!
    </button>
    <!-- Köra en function som automatiskt tar en till homeview? -->

  </div>
</template>

<script>
export default {
    methods: {
        backHome() {
            this.$router.push("/");
        }
    }
};
</script>

<style lang="scss" scoped>
  button { 
    width: 202px;
    height: 48px;
    color: white;
    background-color: black;
    border: none;
    border-radius: 100vw;
    place-self: end;
    font-size: 18px;
    cursor: pointer;
    margin-top: 32px;
    position: relative;
    align-self: flex-end;
    }

  .top {
    width: 100%;
    height: 450px;
    margin-bottom: 32px;
    background-image: url('../assets/skate-hero-1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: grid;
    place-items: center;

  h2 {
    font-size: 48px;
    color: white;
  }
}
</style>