<script setup>
definePageMeta({
    layout: 'products'
})
// fetching the products from fake store API
const {data: products} = await useFetch('https://fakestoreapi.com/products')

</script>
<template>
    <div class="text-center font-semibold mt-2 text-2xl">All Products</div>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>