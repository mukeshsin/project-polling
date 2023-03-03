<template>
<div class="formWrapper">
    <div class="wrap">
        <form @submit.prevent="formSubmit">
            <h2>Log in</h2>
            <label class="formLabel"> Email Id:</label>
            <input type="email" class="formInput" placeholder="please enter email" v-model="email" />

            <label class="formLabel"> Password:</label>
            <input type="password" class="formInput" placeholder="please enter Valid password" v-model="password" />

            <button type="submit" class="submitBtn">Login</button>

        </form>
    </div>

</div>
</template>

<script>
export default {
    name: "logPage",
    data() {
        return {
            email: "",
            password: "",
        }
    }
}
</script>

<style scoped>

</style>
