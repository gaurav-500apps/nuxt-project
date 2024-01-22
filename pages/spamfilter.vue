<script setup>
import { ref } from 'vue';

const spamWordsRegex = /lottery|win|get rich quick|business proposal|prince|bank account|urgent|free/i;

const inputEmail = ref('');
const isSpam = ref(false);

const checkSpam = () => {
  isSpam.value = spamWordsRegex.test(inputEmail.value);
};
</script>

<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">Spam Filter</h1>

    <!-- Input field for checking an email -->
    <div class="mb-8">
      <label for="inputEmail" class="block text-gray-700 text-sm font-bold mb-2">Check Email:</label>
      <div class="flex items-center">
        <input
          type="text"
          id="inputEmail"
          v-model="inputEmail"
          placeholder="Enter an email address"
          class="flex-grow border rounded py-2 px-3 mr-2 focus:outline-none focus:border-blue-500"
        />
        <button
          @click="checkSpam"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Check Spam
        </button>
      </div>
      <p v-if="isSpam" class="mt-2 text-sm text-red-500 font-bold">
        The email <strong>{{ inputEmail }}</strong> is considered spam.
      </p>
      <p v-else-if="inputEmail" class="mt-2 text-sm text-gray-600">
        The email <strong>{{ inputEmail }}</strong> is not spam.
      </p>
    </div>
  </div>
</template>
