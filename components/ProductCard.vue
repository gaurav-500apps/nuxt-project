<template>
    <div class="card text-center bg-white rounded-md shadow-md p-4 mt-3">
        <img :src="product.image" alt="product thumb" class="thumb rounded-md mb-5 mx-auto">
        <p class="font-bold text-gray-700 text-xl mb-2 truncate">{{ product.title }}</p>
        <!-- <p class="font-bold text-gray-700 text-lg mb-2 truncate">{{ product.category }}</p> -->
            <p class="font-bold text-gray-600  mb-2 truncate text-xl">Price : Rs. {{ product.price }}</p>
            <p class="font-bold text-gray-500  mb-2 truncate">Rating : {{ product.rating.rate }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <button class="btn bg-teal-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">View Details</button>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product']);
</script>

<style scoped>
/* Add any additional styles specific to this component */
.thumb {
    max-width: 100%;
    max-height: 200px; /* Set the maximum height for the thumbnail */
}
</style>