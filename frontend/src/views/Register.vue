<template>
  <div class="wrapper">
    <section class="top">
      <h2>Join the family!</h2>
    </section>
    <section class="flexContainer">
      <article>
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
        <div v-if="registed" class="completed">
          <h2>Welcome!</h2>
          <h4>Your account is registerd, don't forget to login!</h4>
        </div>

      </article>
      <article>
          <RegisterForm v-on:stateRegisted="stateRegisted" />
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
    data() {
      return {
        registed: false,
      }
    },
    methods: {
      stateRegisted() {
        this.registed = true
      }
    }
};
</script>

<style scoped lang="scss">

.flexContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: start;
  gap: 32px;

  .completed {
    width: 60%;
    background-color: black;
    color: white;
    padding: 32px 64px;
    text-align: center;
    border-radius: 16px;
    align-self: center;
    margin-top: 64px;
    opacity: 0;
    
    animation-name: fade;
    animation-duration: 1s; /* or: Xms */
    animation-iteration-count: 1;
    animation-direction: alternate; /* or: normal */
    animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
    animation-fill-mode: forwards; /* or: backwards, both, none */
    /* animation-delay: 2s; */
  }

  @keyframes fade {
    0% {
    opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  article {
    display: flex;
    flex-direction: column;
  }
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