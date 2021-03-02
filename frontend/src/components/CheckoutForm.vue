<template>
    <div class="wrapper">
        <form class="checkoutForm" @submit.prevent="onSubmit">
            <section class="delivery">
                <div class="col-2">    
                    <label for="name">Name</label>
                    <input class="col-2" v-model="customer.name" type="text" name="name" required>
                </div>
                <div class="col-2">
                    <label for="street">Street Address</label>
                    <input class="col-2" v-model="customer.street" type="text" name="street" required>
                </div>
                <div>
                    <label  for="city">City</label>
                    <input  v-model="customer.city" type="text" name="city" required>
                </div>
                <div>
                    <label for="zipCode">Zip Code</label>
                    <input v-model="customer.zip" type="text" name="zip" required>
                </div>
            </section>

            <section class="payment">
                <label for="cardowner">Card owner</label>
                <input v-model="payment.cardOwner" type="text" name="owner" required>
                
                <label for="cardnumber">Card Number</label>
                <input v-model="payment.cardNumber" type="number" name="cardnumber" required>
                
                <label for="cardvalid">Valid Until</label>
                <input v-model="payment.cardValid" type="text" name="valid" placeholder="MM / YY" required>
                
                <label for="cardccv">CVV</label>
                <input v-model="payment.cardCVV" type="number" name="cvv" required>
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
        async onSubmit() {
            const user = {}
            user.customer = this.customer
            user.payment = this.payment
        
            await this.$store.dispatch('registerOrder', user);

            this.$router.push("/OrderConfirmed");
        }
    }
}
</script>

<style scoped lang="scss">
    .wrapper {
        background-color: royalblue;

        .checkoutForm {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            background-color: saddlebrown;

            .delivery {
                grid-column: 1 / 2;

                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px 16px;

                div {
                    display: flex;
                    flex-direction: column;
                }

                .col-2 {
                    grid-column: span 2;
                }
            }
            
            .payment {
                grid-column: -1 / -2;
            }
        }
    }
</style>