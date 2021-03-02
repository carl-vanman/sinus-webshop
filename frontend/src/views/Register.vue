<template>
  <div>
    <section class="top">
      <img src="#" alt="" />
      <h2>Join the family!</h2>
    </section>
    <section>
      <article>
        <header>
          <h4>Welcome!</h4>
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

<style>
</style>