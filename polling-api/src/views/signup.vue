<template>
<div class="formWrapper">
    <div class="wrap">
        <h3 class="head">Signup Form</h3>
        <p class="headPara">Please enter details to create a new user</p>
        <form @submit.prevent="formSubmit">
            <label class="formLabel">Firstname:</label>
            <input type="text" v-model="signupData.firstName" />
            <div v-if="firstNameValidate" class="error">{{ firstNameValidate }}</div>
            <div v-if="!signupData.firstName" class="formLabel error">FirstName must be contain 4 character</div>

            <label class="formLabel">Lastname:</label>
            <input type="text" v-model="signupData.lastName" />
            <div v-if="lastNameValidate" class="error">{{ lastNameValidate }}</div>
            <div v-if="!signupData.lastName" class="formLabel error">LastName must be contain 4 character</div>

            <label class="formLabel">Password:</label>
            <input type="password" v-model="signupData.password" />
            <div v-if="!signupData.password" class="formLabel error">Password must be contain 8 character</div>

            <label class="formLabel">Email:</label>
            <input type="email" v-model="signupData.email" />
            <div v-if="!signupData.email" class="formLabel error">Please enter your email</div>
            <div v-if="emailValidate" class="error">{{ emailValidate }}</div>

            <label class="formLabel">Role:</label>
            <input type="role" v-model="signupData.roleId" />
            <div v-if="roleIdValidate" class="error">{{ roleIdValidate }}</div>
            <div v-if="!signupData.roleId" class="formLabel error">RoleId cannot be empty</div>

            <div class="formCheck">
                <input type="checkbox" v-model="signupData.term" />
                <label class="checkboxlabel">ACCEPT TERMS AND CONDITIONS</label>
            </div>

            <button type="submit" class="submitBtn">Create an account</button>
        </form>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "signupCard",
    data() {
        return {
            signupData: {
                firstName: "",
                lastName: "",
                password: "",
                email: "",
                roleId: "",
                term: "false",

            },
        };
    },
    methods: {
        formSubmit() {
            axios
                .post("https://pollapi.innotechteam.in/user/register", this.signupData)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error.response.data);
                });

            this.passwordReg = new RegExp(
                "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?:{}|<>])"
            );
            this.emailReg = new RegExp(
                "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]+$"
            );
            if (this.firstName && this.lastName && this.email && this.roleId && this.term && this.password) {
                if (this.emailReg.test(this.email)) {
                    this.emailValidate =
                        "";
                    if (this.password.length < 6) {
                        this.passwordValidate =
                            "password must be contain 8 character";
                    } else if (!this.passwordReg.test(this.password)) {
                        this.passwordValidate =
                            "Password is not strong enough must contain a number upper,lower and special char";
                    } else {
                        this.passwordValidate = "";
                        this.formSubmitted = true;
                    }
                } else {
                    this.emailValidate = "Enter a valid Email";
                }

            }
        },
    }
}
</script>
