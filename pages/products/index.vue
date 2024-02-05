<script setup>
definePageMeta({
  layout: "products",
  middleware: ["customauth"],
});

// Used useFetch to fetch products
// const { data: products } = useFetch("https://fakestoreapi.com/products");
// https://fakestoreapi.com/products/category/jewelery
// console.log(products);

const data = ref([]);

async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const resdata = await res.json();
    data.value = resdata;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getData();
});
 console.log(data)
</script>

<template>
  <div>
    <div class="text-center font-semibold mt-2 text-2xl">All Products</div>
    <!-- Products list -->
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(product, index) in data" :key="index">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
