<template>
  <div>

      <!-- ta in bild från unsplash? -->

    <section class="top">
      <img src="#" alt="" />
      <h2>Thank you</h2>
    </section>
    <section class="main">
      <h4>Your order is beeing processed</h4>
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

<style>
</style>