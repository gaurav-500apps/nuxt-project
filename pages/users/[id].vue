<script setup>
const route = useRoute();
const id = route.params.id;
const data = ref({});

// Fetch data from local storage when the component is mounted
onMounted(() => {
  let userData = JSON.parse(localStorage.getItem("signup")) || [];
  userData.forEach((item) => {
    if (item.email === id) {
      data.value = item;
      return;
    }
  });
});
</script>
<template>
  <div class="max-w-lg mx-auto mt-8">
    <div class="bg-white rounded-md shadow-md overflow-hidden">
      <div class="bg-gray-300 h-32 flex justify-center">
        <!-- Placeholder image or user avatar -->
        <img
          class="object-cover h-full"
          :src="'https://static.thenounproject.com/png/4035887-200.png'"
          alt="User Avatar"
        />
      </div>

      <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">User Details</h1>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-gray-500">Name:</p>
            <p class="font-semibold">{{ data.name }}</p>
          </div>
          <div>
            <p class="text-gray-500">Number:</p>
            <p class="font-semibold">{{ data.number }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
