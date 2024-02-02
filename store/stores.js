// src/store/index.js
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    authenticatedUser: null,
  }),
});
  