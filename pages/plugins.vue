<script setup>
const { even } = useNuxtApp();
</script>

<template>
  <div class="max-w-2xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-6">Number Generator</h1>

    <div class="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 class="text-xl font-semibold mb-3">Even Numbers:</h2>
      <p class="text-gray-700">{{ even(20).join(", ") }}</p>
    </div>

    <div class="mt-6 bg-gray-100 p-6 rounded-md shadow-md">
      <h2 class="text-xl font-semibold mb-3">Odd Numbers:</h2>
      <p class="text-gray-700">{{ $odd(20).join(", ") }}</p>
    </div>
  </div>
</template>

<style scoped></style>
