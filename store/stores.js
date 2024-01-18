import { defineStore } from "pinia";

export const useApiStore = defineStore('Api', ()=>{
    const data = ref(null);
    
    async function getData () {

        
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const resdata = await res.json();
                data.value = resdata
            }
            catch (error) {
                console.log(error)
            }
        
    }
    return{data, getData}
})

// src/store/index.js
// import { defineStore } from 'pinia';

// export const useMainStore = defineStore('main', {
//   state: () => ({
//     user: null,
//   }),
//   getters: {
//     isLogged: (state) => {
//       return state.user !== null
//     },
//   },
//   actions: {
//     setUser(name) {
//       this.user = name
//     },
//   },
// });