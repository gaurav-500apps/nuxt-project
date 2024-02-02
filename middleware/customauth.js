export default defineNuxtRouteMiddleware((to, from) => {
  const authenticatedUser = useCookie("authenticatedUser");
  console.log(to);
  // console.log(authenticatedUser.value)
  if (to.path === "/signup" || to.path === "/login") {
    // console.log('authenticated')
    if (authenticatedUser.value) {
      return navigateTo("/products");
    }
    return;
  }

  if (!authenticatedUser.value) {
    return navigateTo("/login");
  }

  return;
});
