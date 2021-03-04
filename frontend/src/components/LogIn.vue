<template>
  <div class="login">
    <div class="background">
      <img
        src="@/assets/icon-user-black.svg"
        alt="login"
        @click="showLogin = !showLogin"
      />
    </div>
    <div class="login-modal" v-if="showLogin">
      <form @submit.prevent="onSubmit()" v-if="!getUser">
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          v-model="user.email"
          @input="removeError"
        />
        <label for="password">Password</label>
        <input
          type="text"
          name="password"
          v-model="user.password"
          @input="removeError"
        />
        <p v-if="getLoginError">Wrong email or password!</p>
        <input type="submit" value="Login" />
      </form>
      <div v-else>
        <h2>Hello {{ getUser.name }}!</h2>
        <button class="account" @click="myAccount">My Account</button>
        <button @click="logout">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogin: false,
      user: {
        email: null,
        password: null,
      },
    };
  },

  created() {
    if (localStorage.getItem("token")) {
      this.$store.dispatch("getUser");
      this.$store.dispatch("getOrders");
    }
  },

  methods: {
    async onSubmit() {
      console.log(this.user);
      await this.$store.dispatch("login", this.user);
    },

    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
      location.reload();
    },

    removeError() {
      if (this.getLoginError) {
        this.$store.commit("setLoginError", false);
      }
    },
    myAccount() {
      this.$router.push("/myaccount");
      this.showLogin = false;
    },
  },

  computed: {
    getUserToken() {
      return localStorage.getItem("token");
    },

    getUser() {
      return this.$store.getters.getInlogUser;
    },

    getLoginError() {
      return this.$store.getters.getLoginError;
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  height: 44px;
  width: 44px;
}
img {
  height: 60%;
  margin-left: 1px;
  margin-top: 6px;
}

.background:hover {
  cursor: pointer;
}

.login {
  position: relative;
}

.login-modal {
  position: absolute;
  background-color: #fff;
  width: 300px;
  z-index: 1;
  left: -555%;
  top: 60px;
  box-shadow: 0px 0px 62px rgba(0, 0, 0, 0.18);
}

.login-modal::before {
  content: "";
  width: 20px;
  height: 10px;
  background-color: white;

  position: absolute;
  top: -10px;
  right: 23px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

form {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px auto 10px auto;

  label {
    align-self: flex-start;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
  }

  input[type="text"] {
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    height: 30px;
  }

  input[type="text"]:focus {
    background-color: #eeeeee;
  }

  input[type="submit"] {
    background-color: #000;
    color: #fff;
    margin: 10px auto 10px auto;
    border: none;
    border-radius: 50px;
    width: 210px;
    height: 50px;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type="submit"]:hover {
    cursor: pointer;
  }

  input[type="submit"]:focus {
    outline: none;
  }
}

button {
  background-color: #000;
  color: #fff;
  margin: 10px auto 20px auto;
  border: none;
  border-radius: 50px;
  width: 210px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.account {
  background-color: #75bf48;
}

.account:hover {
  background-color: #8bda5b;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline: none;
}

h2 {
  font-size: 18px;
}

p {
  margin: 0;
  font-size: 14px;
  color: #f56969;
}
</style>