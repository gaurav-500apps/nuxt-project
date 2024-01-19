    <script setup>
    const nuxtApp = useNuxtApp();
    const today = nuxtApp.today;
    // console.log(today)
    </script>
<template>
    <p class="text-center">Home Page</p>
    <h3 class="text-end">{{ today }}</h3>
</template>


<style scoped>
</style>