<script setup>
definePageMeta({
    layout: 'products',
    middleware: ["customauth"]
})

// Used useFetch to fetch products
const { data: products } = useFetch('https://fakestoreapi.com/products');
// https://fakestoreapi.com/products/category/jewelery
console.log( products);
</script>

<template>
  <div>
    <div class="text-center font-semibold mt-2 text-2xl">All Products</div>
    <!-- Products list -->
    <div v-if="products">
      <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
