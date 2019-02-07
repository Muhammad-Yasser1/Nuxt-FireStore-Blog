<template>
    <div>
        <div class="container-fluid px-md-5">
            <navbar></navbar>
            <hr class="mt-0 mb-3">
            <nuxt/>
            <foot></foot>
        </div>
    </div>
</template>

<script>
import Navbar from "@/layouts/partials/Navbar.vue";
import Foot from "@/layouts/partials/Foot.vue";
export default {
    components: {
        Navbar,
        Foot
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
