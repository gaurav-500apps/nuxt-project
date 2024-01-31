    
<script setup>
const numbers = ref([0, 0, 0, 0]);
const sortedArray = ref([]);

const sortWithBubble = () => {
  sortedArray.value = [...numbers.value].sort((a, b) => a - b);
};

const sortWithSelection = () => {
  let arr = [...numbers.value];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  sortedArray.value = arr;
};
</script>

<template>
  <div class="container mx-auto p-4 max-w-lg mt-5">
    <h1 class="text-2xl font-semibold mb-4">Sorting Example</h1>

    <div class="flex flex-col mb-4">
      <div class="mb-2">
        <label for="input1" class="block mb-1">Number 1:</label>
        <input type="number" id="input1" v-model="numbers[0]" class="border p-2 w-full" />
      </div>

      <div class="mb-2">
        <label for="input2" class="block mb-1">Number 2:</label>
        <input type="number" id="input2" v-model="numbers[1]" class="border p-2 w-full" />
      </div>

      <div class="mb-2">
        <label for="input3" class="block mb-1">Number 3:</label>
        <input type="number" id="input3" v-model="numbers[2]" class="border p-2 w-full" />
      </div>

      <div class="mb-2">
        <label for="input4" class="block mb-1">Number 4:</label>
        <input type="number" id="input4" v-model="numbers[3]" class="border p-2 w-full" />
      </div>

      <button @click="sortWithBubble" class="bg-teal-500 text-white py-2 px-4 rounded">Bubble Sort</button>
      <button @click="sortWithSelection" class="bg-teal-800 text-white py-2 px-4 rounded mt-2">Selection Sort</button>
    </div>

    <div v-if="sortedArray.length > 0" class="mt-4">
      <p class="text-lg">Sorted Array: {{ sortedArray.join(', ') }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
