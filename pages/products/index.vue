<script setup>

definePageMeta({
    layout: 'products',
    middleware: ["customauth"]
})

// Use useFetch to fetch products
const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products')

</script>

<template>
  <div>
    <div class="text-center font-semibold mt-2 text-2xl">All Products</div>

    <!-- Loading state -->
    <div v-if="loading" class="text-center mt-4">
      Loading products...
    </div>

    <!-- Error state -->
    <div v-if="error" class="text-center text-red-500 mt-4">
      Error loading products. Please try again later.
    </div>

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

<style scoped>
/* Your scoped styles go here */
</style>


<!-- <script setup>
definePageMeta({
    layout: 'products',
    middleware: ["customauth"]
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

</style> -->