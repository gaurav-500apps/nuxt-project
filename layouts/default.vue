<script setup>

// import useMainStore from '../store/stores.js'
let  authenticatedUser = useCookie("authenticatedUser");
let status = authenticatedUser.value;
console.log(status)
if(status){
    console.log('loggedin')
}
const handleLogOut = () => {
    // set the store 
    authenticatedUser.value = undefined;
    console.log(authenticatedUser)
    navigateTo("/login");
}

</script>

<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Bub Mart</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/plugins">Plugins</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                    <li><NuxtLink to="/users">Users</NuxtLink></li>
                    <li><NuxtLink to="/spamfilter">Regex/closures</NuxtLink></li>
                    <li><NuxtLink to="/contactmanager">Contact Manager</NuxtLink></li>
                    <li><NuxtLink to="/fetch">Free code users</NuxtLink></li>
                    <li><NuxtLink to="/oops">oops</NuxtLink></li>
                    <li v-if="!status"><NuxtLink to="/login" class="btn">login</NuxtLink></li>
                    <li v-if="!status"><NuxtLink to="/signup">Signup</NuxtLink></li>
                    <li @click="handleLogOut" v-if="status"><NuxtLink to="/">logout</NuxtLink></li>
                </ul>
        </nav>
    </header>
    <!-- Output the page content -->

    <div class="container mx-auto">
        <slot />
    </div>
</template> 


<style scoped>
.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.router-link-exact-active {
    color: teal;
}</style>