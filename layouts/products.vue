<script setup>
</script>

<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
           <NuxtLink to="/products" class="font-bold">Nuxt Mart</NuxtLink> 
        </nav>
    </header>
    <!-- Output the page content -->

    <div class="container mx-auto">
        <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <div class="navbar">
                <h1>
                    <NuxtLink to="/">Home</NuxtLink>
                </h1>
                <h1>
                    <NuxtLink to="/about">About</NuxtLink>
                </h1>
                <h1>
                    <NuxtLink to="/products">Products</NuxtLink>
                </h1>
            </div>
    </footer>

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