<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-100 to-amber-200 flex flex-col items-center justify-center text-center p-8">
    <h1 class="text-5xl font-bold font-serif text-yellow-900 mb-4">Welcome to the Realm of Maren</h1>
    <p class="text-yellow-800 max-w-xl mb-8 text-lg">
      A place of code, creativity and curiosities. Step into a world shaped by Vue, magic, and imagination.
    </p>
    <router-link to="/character" class="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition duration-300">
      🧙‍♂️ Enter the Realm
    </router-link>
  </div>
</template>

<script setup lang="ts">
// No logic needed yet
</script>

<style scoped>
/* Add background images, SVG, stars etc. later for style */
</style>
