<script setup>
const nuxtApp = useNuxtApp();
const today = nuxtApp.today;
// console.log(today)
</script>
<template>
  <marquee><span class="mr-3">🇮🇳 </span>Shop Now and Embrace the Spirit of Freedom! FLAT 15% OFF<span class="ml-3">🇮🇳 </span></marquee>
  <h3 class="text-end mt-5">{{ today }}</h3>
  <p class="text-3xl font-bold text-center mb-10">Home Page</p>
  <div>
    <!-- Hero Section -->
    <div class="bg-teal-900 text-white">
      <div class="max-w-6xl mx-auto py-16 text-center">
        <h1 class="text-4xl lg:text-6xl font-extrabold mb-4 text-green-300">
          Discover Your Perfect Products
        </h1>
        <p class="text-lg lg:text-xl opacity-80 mb-8">
          Explore a wide range of high-quality products designed to enhance your
          lifestyle.
        </p>
        <router-link
          to="/shop"
          class="bg-white text-teal-900 py-2 px-6 rounded-full font-semibold text-lg hover:bg-gray-200"
          >Shop Now</router-link
        >
      </div>
    </div>

    <!-- Featured Products Section -->
    <div class="max-w-6xl mx-auto py-16">
      <h2 class="text-3xl font-bold text-center mb-10">Featured Products</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Featured Product 1 -->
        <div
          class="bg-white rounded-md overflow-hidden shadow-md flex flex-col items-center"
        >
          <img
            src="https://valeecommerceimages.s3.eu-west-2.amazonaws.com/ohbigmanclothing.com/products/220/gallery/17272.jpg"
            alt="Featured Product 1"
            class="w-auto h-48 object-cover"
          />
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold mb-2">Men's Shirt</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="mt-4">
              <router-link to="/product/1" class="text-teal-500 hover:underline"
                >View Details</router-link
              >
            </div>
          </div>
        </div>

        <!-- Featured Product 2 -->
        <div
          class="bg-white rounded-md overflow-hidden shadow-md flex flex-col items-center"
        >
          <img
            src="https://i.pinimg.com/736x/fc/b7/20/fcb7208233aa2237baf51545268651ba.jpg"
            alt="Featured Product 1"
            class="w-auto h-48 object-cover"
          />
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold mb-2">
              Traditional Stone Studded Chandbali Earrings
            </h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="mt-4">
              <router-link to="/product/1" class="text-teal-500 hover:underline"
                >View Details</router-link
              >
            </div>
          </div>
        </div>

        <!-- Featured Product 3 -->
        <div
          class="bg-white rounded-md overflow-hidden shadow-md flex flex-col items-center"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMHdw-8s277Pmgvfx_eLEpVRmLPOvDZSJWQ&usqp=CAU"
            alt="Featured Product 1"
            class="w-auto h-48 object-cover"
          />
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold mb-2">
              Bag(Batik) Flower Print | Leather Bag(Batik) |
            </h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="mt-4">
              <router-link to="/product/1" class="text-teal-500 hover:underline"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call-to-Action Section -->
    <div class="bg-gray-100 py-16">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p class="text-gray-700 mb-6">
          Stay updated with the latest products and exclusive offers by
          subscribing to our newsletter.
        </p>
        <form class="flex items-center justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="py-2 px-4 w-full border rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            class="bg-teal-500 text-white py-2 px-6 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
