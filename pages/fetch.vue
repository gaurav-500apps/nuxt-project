<script setup>
import { ref, onMounted, computed } from "vue";

const data = ref([]);
const usersPerPage = 4;
const currentPage = ref(1);

onMounted(async () => {
  try {
    const res = await fetch(
      "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json"
    );
    const resdata = await res.json();
    data.value = resdata;
  } catch (err) {
    console.error(`There was an error: ${err}`);
  }
});

const displayedUsers = computed(() => {
  const startIndex = (currentPage.value - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  return data.value.slice(startIndex, endIndex);
});
 
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  const lastPage = Math.ceil(data.value.length / usersPerPage);
  if (currentPage.value < lastPage) {
    currentPage.value++;
  }
};
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-8 mt-4">freeCodeCamp News Author Page</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="user in displayedUsers"
        :key="user.author"
        class="bg-white p-4 rounded-md shadow-md flex justify-center flex-col items-center"
      >
        <img
          :src="`${user.image}`"
          alt="unfound"
          class="h-40 w-40 object-cover rounded-l-full mb-4"
        />
        <p class="text-lg font-semibold mb-2">{{ user.author }}</p>
        <p class="text-gray-700 mb-4">
          {{ user.bio.length > 50 ? `${user.bio.slice(0, 50)}...` : user.bio }}
        </p>
        <a :href="`${user.url}`" class="text-blue-500">{{ user.url }}</a>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center gap-20 mt-5">
    <button
      class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-blue-600"
      @click="prevPage"
      :disabled="currentPage === 1"
    >
      Prev
    </button>
    <button>{{ currentPage }}</button>
    <button
      class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-blue-600"
      @click="nextPage"
      :disabled="currentPage * usersPerPage >= data.length"
    >
      Next
    </button>
  </div>
</template>

<style scoped></style>
