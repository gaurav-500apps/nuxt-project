<script setup>
const data = ref([]);
const selectedCategory = ref("");
const categories = [
  "jewelery",
  "electronics",
  "men's clothing",
  "women's clothing",
];
async function getData() {
  try {
    let apiUrl = "https://fakestoreapi.com/products";

    // Append category to the API URL if selected
    if (selectedCategory.value) {
      apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory.value}`;
    }

    const res = await fetch(apiUrl);
    const resdata = await res.json();
    data.value = resdata;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getData();
});
</script>
<template>
  <div>
    <div class="text-center font-semibold mt-4 text-2xl">All Products</div>

    <!-- Search input and category dropdown -->
    <div class="flex justify-end mt-6 space-x-4">
      <select v-model="selectedCategory" @change="getData" class="border p-1">
        <option value="">All Categories</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Products list -->
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(product, index) in data" :key="index">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
