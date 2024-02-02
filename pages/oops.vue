<script>
definePageMeta({
  middleware: ["customauth"],
});

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  celebrateBirthday() {
    this.age += 1;
    console.log(
      `Happy Birthday, ${this.name}! You are now ${this.age} years old.`
    );
  }
}

export default {
  data() {
    return {
      person: new Person("Aftab AKhand", 25),
    };
  },
  methods: {
    celebrateBirthday() {
      this.person.celebrateBirthday();
    },
  },
};
</script>

<template>
  <div class="person-card">
    <h2>{{ person.name }}</h2>
    <p>Age: {{ person.age }}</p>
    <button
      @click="celebrateBirthday"
      class="bg-teal-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Celebrate Birthday
    </button>
  </div>
</template>

<style scoped>
.person-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
</style>
