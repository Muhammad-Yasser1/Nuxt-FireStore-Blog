<template>
    <div class="form">
        <h1>Login or Register to continue...</h1>
        <form @submit.prevent>
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    v-model="user.email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email"
                >
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                    v-model="user.password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                >
            </div>
            <div class="d-flex justify-content-around" v-if="loginMode">
                <button @click="onSubmit" type="submit" class="btn btn-primary">Login</button>
                <button @click="loginMode = !loginMode" class="btn btn-dark ml-auto">Register first</button>
            </div>
            <div class="d-flex justify-content-around" v-if="!loginMode">
                <button @click="onSubmit" type="submit" class="btn btn-primary">Register</button>
                <button @click="loginMode = !loginMode" class="btn btn-dark ml-auto">Login instead</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    middleware: ["HasTokenAndAdmin"],
    layout: "auth",
    data() {
        return {
            loginMode: true,
            user: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        onSubmit() {
            this.$store.dispatch("authenticateUsers", {
                user: this.user,
                loginMode: this.loginMode
            });
        }
    },
    created() {
        if (process.client) {
            if (
                window.localStorage.getItem("token") &&
                !window.localStorage.getItem("isAdmin")
            ) {
                this.$router.push("/posts");
            }
            if (
                window.localStorage.getItem("token") &&
                window.localStorage.getItem("isAdmin")
            ) {
                this.$router.push("/admin");
            }
        }
    }
};
</script>

<style scoped>
h1 {
    margin: 100px auto 0;
    text-align: center;
}
form {
    max-width: 400px;
    max-height: 400px;
    margin: 80px auto;
}
</style>