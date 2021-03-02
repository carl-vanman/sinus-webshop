<template>
    <div class="wrapper">
        <form class="registerForm" @submit.prevent="onSubmitRegister">
            <section class="Register">
                <h2>Register</h2>
                <div >    
                    <label for="name">Name</label>
                    <input v-model="customer.name" type="text" name="name" required>
                </div>
                <div >
                    <label for="email">Email</label>
                    <input v-model="customer.email" type="email" name="email" required>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input v-model="customer.password" type="password" name="password" required>
                </div>
                <div>
                    <label for="password">Repeat Password</label>
                    <input v-model="customer.repeatPassword" type="password" name="password" required>
                </div>
            </section>
            <section class="Address">
                <h2>Address</h2>
                <div>
                    <label for="street">Street Address</label>
                    <input v-model="customer.address.street" type="text" name="street" required>
                </div>
                <div class="col-1">
                    <label for="zipCode">Zip Code</label>
                    <input v-model="customer.address.zip" type="text" name="zip" required>
                </div>
                <div class="col-1">
                    <label for="city">City</label>
                    <input v-model="customer.address.city" type="text" name="city" required>
                </div>
            </section>
            
            <input class="submitButton" type="submit" value="Sign me up!">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customer: {
                name: null,
                email: null,
                password: null,
                repeatPassword: null, /* måste ev flyttas ut */
                address: {
                    street: null,
                    zip: null,
                    city: null,
                }
            },
        }
    },
    methods: {
        async onSubmitRegister() {
            const user = this.customer
            
            await this.$store.dispatch('registerUser', user);

            /* this.$router.push("/"); */
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        
        section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 24px;
            row-gap: 8px;

            div {
                grid-column: span 2;
                display: flex;
                flex-direction: column;
            }
            div .col-1 {
                grid-column: span 1;
            }
        }
    }
    input {
        border: 1px solid rgba(0, 0, 0, 0.6);
        border-radius: 2px;
        height: 40px;
        background-color: #eeeeee;
    }
    .registerForm {
        display: flex;
        flex-direction: column;

        .submitButton { 
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
    }
</style>