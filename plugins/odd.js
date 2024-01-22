//with provide key

export default defineNuxtPlugin((nuxtApp) => {
  let oddNumbers = [];
  return {
    provide: {
      odd: (maxNum) => {
        oddNumbers = [];
        for (let i = 1; i <= maxNum; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(i);
            // console.log(even)
          }
        }
        return oddNumbers;
      },
    },
  };
});
