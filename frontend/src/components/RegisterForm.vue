<template>
    <div>
        <form class="registerForm" @submit.prevent="onSubmitRegister">
            <section class="Register">
                <h4>Register</h4>
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
                <h4>Address</h4>
                <div>
                    <label for="street">Street Address</label>
                    <input v-model="customer.address.street" type="text" name="street" required>
                </div>
                <div>
                    <label for="zipCode">Zip Code</label>
                    <input v-model="customer.address.zip" type="text" name="zip" required>
                </div>
                <div>
                    <label for="city">City</label>
                    <input v-model="customer.address.city" type="text" name="city" required>
                </div>
            </section>
            
            <input type="submit" value="Sign me up!">
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
            const user = {}
            user.customer = this.customer
        
            await this.$store.dispatch('',);

            /* this.$router.push(""); */
        }
    }
}
</script>

<style>

</style>