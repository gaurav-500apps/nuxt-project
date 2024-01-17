<template>
    <div class="h-96 bg-white rounded-md shadow-md my-7 flex gap-10">
        <!-- Product details -->
        <img :src="product.image" class="mb-4 rounded-md shadow-md w-8- h-auto mx-10 mt-2" alt="Product Image" />
        <div class="">
            <p class="text-2xl font-medium mb-4 mt-6">{{ product.title }}</p>
            <p class="text-gray-1000 text-5xl mb-2 md:mb-6">Price: ${{ product.price }}</p>
            <p class="text-gray-600 description ">{{ product.description }}</p>
            <!-- <p class="text-gray-500">ID: {{ product.id }}</p> -->
        </div>
    </div>
</template>
    
<script setup>
const { id } = useRoute().params;
const url = 'https://fakestoreapi.com/products/' + id;

// Fetching the product detail
const { data: product } = await useFetch(url, { key: id });

definePageMeta({
    layout: 'products'
});
</script>
    
<style scoped>
/* Additional styles specific to this component */
.description {
    line-height: 1.5;
    max-width: 100%;
}
</style>
    