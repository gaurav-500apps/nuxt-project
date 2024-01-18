
export default defineNuxtRouteMiddleware((to, from) => {
    const loggedIn = false;
    if(to.path === "/login" && !loggedIn){
        return navigateTo("/")
    }
})