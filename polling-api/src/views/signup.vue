<template>
<div class="formWrapper">
    <div class="wrap">
        <form @submit.prevent="formSubmit">

            <label class="formLabel">Firstname:</label>
            <input type="email" v-model="firstname" />

            <label class="formLabel">Lastname:</label>
            <input type="password" v-model="lastname" />

            <label class="formLabel">Pasword:</label>
            <input class="password" v-model="password">

            <label class="formLabel">Email:</label>
            <input class="email" v-model="email">

            <label class="formLabel">Role:</label>
            <select v-model="role">
                <option value="Web Developer">Admin</option>
                <option value="Web Designer">Hr</option>
            </select>

            <div class="formCheck">
                <input type="checkbox" v-model="term" />
                <label class="checkboxlabel">ACCEPT TERMS AND CONDITIONS</label>
            </div>

            <button type="submit" class="submitBtn">Create an account</button>

        </form>
    </div>
</div>
</template>

<script>

export default {
    name: 'signupCard',
    data() {
        return {
            firstname: "",
            lastname: "",
            password: "",
            email: "",
            role: "",
            term: "",
        }
    },


}
</script>

<style>
.formWrapper {
    width: 65%;
    margin-left: 18%;
    border: 15px solid crimson;
}

.wrap {
    margin-left: 8%
}

.formLabel {
    width: 80%;
    margin-top: 4%;
    font-size: 18px;
    letter-spacing: 1px;
    display: inline-block;
    font-weight: bold;
    display: flex
}

input {
    display: block;
    width: 70%;
    margin-top: 15px;
    height: 30px;
    font-size: 18px;
    color: gray;
    box-sizing: border-box;
    margin-left: 5%;
    border: 1px solid #bec2c4;
    padding-left: 10px;
}

select {
    display: block;
    width: 70%;
    margin-top: 15px;
    font-size: 16px;
    color: gray;
    margin-left: 5%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #bec2c4;
    padding: 5px;
    letter-spacing: 1px;
}

.formCheck {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 10px;
}

.formCheck input {
    margin-right: 15px;
    width: 20px;
}

.formCheck label {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 18px;
    margin-top: 20px;
}

.submitBtn {
    width: 250px;
    margin-top: 40px;
    margin-bottom: 40px;
    height: 50px;
    border-radius: 25px;
    background-color: #6ea4e6;
    color: white;
    font-size: 20px;
    border: none;
    cursor: pointer;
}
</style>
