<template>
    <div class="wrapper">
        <form @submit.prevent="onSubmit">
            <section class="delivery">
                <label for="name">Name</label>
                <input v-model="customer.name" type="text" name="name">
                <label for="street">Street Address</label>
                <input v-model="customer.street" type="text" name="street">
                <label for="city">City</label>
                <input v-model="customer.city" type="text" name="city">
                <label for="zipCode">Zip Code</label>
                <input v-model="customer.zip" type="text" name="zip">
            </section>
            <section class="payment">
                <label for="cardowner">Card owner</label>
                <input v-model="payment.cardOwner" type="text" name="owner">
                <label for="cardnumber">Card Number</label>
                <input v-model="payment.cardNumber" type="number" name="cardnumber">
                <label for="cardvalid">Valid Until</label>
                <input v-model="payment.cardValid" type="text" name="valid" placeholder="MM / YY">
                <label for="cardccv">CVV</label>
                <input v-model="payment.cardCVV" type="number" name="cvv">
            </section>
            <input type="submit" value="Take my money!">
        </form>
    </div>
</template>

<script>
export default {
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
        onSubmit() {
            const user = {}
            user.customer = this.customer
            user.payment = this.payment
        
            this.$store.dispatch('registerOrder', user)
        }
    }
}
</script>

<style scoped lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
</style>