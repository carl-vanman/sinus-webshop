<template>
  <div class="wrapper">
    <section class="top">
      <!-- <img src="@/assets/skate-hero-1.jpg" alt=""> -->
      <h2>Join the family!</h2>
    </section>
    <section class="flexContainer">
      <article>
        <header>
          <h2>Welcome!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            nesciunt, iste tempore cumque incidunt facere ullam illum excepturi
            nisi, quam ipsam eligendi possimus! Modi placeat nisi impedit
            deleniti ea id?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            nesciunt, iste tempore cumque incidunt facere ullam illum excepturi
            nisi, quam ipsam eligendi possimus! Modi placeat nisi impedit
            deleniti ea id?
          </p>
        </header>
      </article>
      <article>
          <RegisterForm />
      </article>
    </section>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';
export default {
    components: { 
        RegisterForm,
    },
};
</script>

<style scoped lang="scss">

.flexContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: start;
  gap: 32px;
}
</style>