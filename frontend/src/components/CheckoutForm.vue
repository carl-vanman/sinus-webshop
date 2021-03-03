<template>
  <div class="wrapper">
    <h2>YOUR CART</h2>
    <form class="checkoutForm" @submit.prevent="onSubmit">
      <section>
        <h4>ITEMS</h4>
        <div class="cartList">
          <CartList />
        </div>
      </section>
      <section class="delivery">
        <h4>DELIVERY</h4>
        <div class="col-2">
          <label for="name">Name</label>
          <input
            class="col-2"
            v-model="customer.name"
            type="text"
            name="name"
            required
          />
        </div>
        <div class="col-2">
          <label for="street">Street Address</label>
          <input
            class="col-2"
            v-model="customer.street"
            type="text"
            name="street"
            required
          />
        </div>
        <div>
          <label for="city">City</label>
          <input v-model="customer.city" type="text" name="city" required />
        </div>
        <div>
          <label for="zipCode">Zip Code</label>
          <input v-model="customer.zip" type="text" name="zip" required />
        </div>
      </section>

      <section class="payment">
        <h4>PAYMENT</h4>
        <div class="col-2">
          <label for="cardowner">Card owner</label>
          <input
            v-model="payment.cardOwner"
            type="text"
            name="owner"
            required
          />
        </div>
        <div class="col-2">
          <label for="cardnumber">Card Number</label>
          <input
            v-model="payment.cardNumber"
            type="number"
            name="cardnumber"
            required
          />
        </div>
        <div>
          <label for="cardvalid">Valid Until</label>
          <input
            v-model="payment.cardValid"
            type="text"
            name="valid"
            placeholder="MM / YY"
            required
          />
        </div>
        <div>
          <label for="cardccv">CVV</label>
          <input v-model="payment.cardCVV" type="number" name="cvv" required />
        </div>
      </section>
      <input class="submitButton" type="submit" value="Take my money!" />
    </form>
  </div>
</template>

<script>
import CartList from "./CartList.vue";
export default {
    components: { 
      CartList 
    },
    created() {
        let user = this.$store.getters.getInlogUser
        if(user !== null) {
            this.customer.name = user.name
            this.customer.street = user.address.street
            this.customer.city = user.address.city
            this.customer.zip = user.address.zip
        }
    },
    data() {
        return {
            customer: {
                name: null,
                street: null,
                city: null,
                zip: null
            },
            payment: {
                cardOwner: null,
                cardNumber: null,
                cardValid: null,
                cardCVV: null
            },
        }
    },
    methods: {
        async onSubmit() {
            const user = {}
            user.customer = this.customer
            user.payment = this.payment
        
            await this.$store.dispatch('registerOrder', user);

      await this.$store.dispatch("registerOrder", user);

      this.$router.push("/OrderConfirmed");
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  text-align: start;

  .checkoutForm {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    .delivery,
    .payment {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 16px;
      text-align: start;

      div {
        display: flex;
        flex-direction: column;
      }

      .col-2 {
        grid-column: span 2;
      }
    }
  }
}
input {
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  height: 50px;
  width: 100%;
  background-color: #eeeeee;
}

label {
  font-size: 14px;
}

.submitButton {
  grid-column-start: 3;
  width: 202px;
  height: 48px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 100vw;
  place-self: end;
  font-size: 18px;
  cursor: pointer;
}

.cartList {
  height: 238px;
  overflow: scroll;
}
</style>