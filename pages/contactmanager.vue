<script setup>
definePageMeta({
  middleware: ["customauth"],
});

const contactManager = reactive(new ContactManager());

function ContactManager() {
  return {
    contacts: [
      {
        id: 1,
        name: "Gagan",
        email: "Gagan@gmail.com",
      },
      {
        id: 2,
        name: "Hari",
        email: "Hari@gmail.com",
      },
    ],
    newContact: {
      name: "",
      email: "",
    },

    addContact() {
      if (this.newContact.name && this.newContact.email) {
        this.contacts.push({
          ...this.newContact,
          id: this.contacts.length + 1,
        });
        this.newContact.name = "";
        this.newContact.email = "";
      }
    },

    removeContact(id) {
      const index = this.contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    },
  };
}
</script>

<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">Contact Manager</h1>

    <form @submit.prevent="contactManager.addContact">
      <label for="name" class="block mb-2">Name:</label>
      <input
        v-model="contactManager.newContact.name"
        type="text"
        id="name"
        class="border p-2 mb-4"
      />

      <label for="email" class="block mb-2">Email:</label>
      <input
        v-model="contactManager.newContact.email"
        type="email"
        id="email"
        class="border p-2 mb-4"
      />

      <button
        type="submit"
        class="bg-teal-500 text-white font-bold py-2 px-4 rounded"
      >
        Add Contact
      </button>
    </form>

    <ul class="mt-8">
      <li
        v-for="contact in contactManager.contacts"
        :key="contact.id"
        class="mb-4"
      >
        <div class="flex justify-between items-center">
          <div>
            <p>{{ contact.name }}</p>
            <p>{{ contact.email }}</p>
          </div>
          <button
            @click="contactManager.removeContact(contact.id)"
            class="text-red-500"
          >
            Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
