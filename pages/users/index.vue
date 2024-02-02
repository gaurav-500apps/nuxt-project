<script setup>
definePageMeta({
  middleware: ["customauth"],
});

// Define a reactive reference for surveyData
let surveyData = ref([]);

// Define the getSurveyData method
const getSurveyData = (signup) => {
  console.log("Fetching survey data...");

  // Use onMounted to fetch data after the component is mounted
  onMounted(() => {
    const data = JSON.parse(localStorage.getItem(signup));
    console.log(data);
    surveyData.value = data;
    console.log(surveyData);
  });
};
// Trigger getSurveyData with a dynamic signup parameter
getSurveyData("signup");
</script>

<template>
  <div class="max-w-2xl mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-4">User Details</h1>
    <div
      v-for="data in surveyData"
      :key="data.name"
      :id="data.email"
      class="bg-white rounded-md shadow-md p-4 mb-4"
    >
      <NuxtLink :to="`/users/${data.email}`">
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>

          <div>
            <p class="text-lg font-bold">Name : {{ data.name }}</p>
            <p class="text-gray-500">Mob : {{ data.number }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
