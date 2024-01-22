import dayjs from "dayjs";

export default defineNuxtPlugin(async (nuxtApp) => {
  const today = dayjs().format("dddd, DD MMMM, YYYY");
  nuxtApp.today = today;
});
