<template>
    <div class="wrapper">
        <form @submit.prevent="onSubmit">
            <section class="delivery">
                <label for="name">Name</label>
                <input type="text" name="name">
                <label for="street">Street Address</label>
                <input type="text" name="street">
                <label for="city">City</label>
                <input type="text" name="city">
                <label for="zipCode">Zip Code</label>
                <input type="text" name="zip">
            </section>
            <section class="payment">
                <label for="owner">Card owner</label>
                <input type="text" name="owner">
                <label for="cardNumber">Card Number</label>
                <input type="text" name="cardnumber">
                <label for="valid">Valid Until</label>
                <input type="text" name="valid">
                <label for="cvv">CVV</label>
                <input type="text" name="cvv">
            </section>
            <input type="submit" value="Take my money!">
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        onSubmit() {
            const checkoutInfo = {
                _id: null,
                email: null,
                password: null,
                name: this.name,
                role: 'customer',
                address: {
                    street: this.street,
                    zip: this.zipCode,
                    city: this.city
                }
            };
            console.log(checkoutInfo)
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