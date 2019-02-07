<template>
    <div>
        <div class="container-fluid px-md-5">
            <admin-nav></admin-nav>
            <nuxt/>
            <foot></foot>
        </div>
    </div>
</template>

<script>
import adminNav from "@/layouts/partials/adminNav";
import Foot from "@/layouts/partials/Foot.vue";
export default {
    middleware: ["isAdmin"],
    components: {
        adminNav,
        Foot
    },
    created() {
        if (process.client) {
            if (
                window.localStorage.getItem("token") &&
                !window.localStorage.getItem("isAdmin")
            ) {
                this.$router.push("/posts");
            }
            if (!window.localStorage.getItem("token")) {
                this.$router.push("/");
            }
        }
    }
};
</script>

<style lang="scss">
html,
body {
    font-family: "Prompt", sans-serif !important;
    background: #fcfdff;
}

body {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.6;
    color: #212529;
    text-align: left;
    background-color: #fcfdff;
}

.page-enter-active {
    transform-origin: top;
    animation: bounce-in 0.8s;
}
.page-leave-active {
    transform-origin: top;
    animation: bounce-out 0.5s;
}
@keyframes bounce-in {
    0% {
        transform: scale(0.9);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
@keyframes bounce-out {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.9);
        opacity: 0;
    }
}
</style>
