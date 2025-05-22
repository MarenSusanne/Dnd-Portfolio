<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-100 to-amber-200 flex flex-col items-center justify-center gap-6 p-8 font-serif">
    <h1 class="text-4xl font-bold text-yellow-900 mb-6">🗺️ Kartet til mitt utvikler-univers</h1>
    <p>Kartet tegnes for øyeblikket – snart kan du navigere dette riket via visuelle landemerker. </p>
    <router-link
      to="/character"
      class="bg-yellow-700 hover:bg-yellow-800 text-white py-3 px-6 rounded-xl shadow-md text-lg transition duration-300"
    >
      🧙‍♀️ Karakterarket (Om meg)
    </router-link>

    <router-link
      to="/projects"
      class="bg-yellow-700 hover:bg-yellow-800 text-white py-3 px-6 rounded-xl shadow-md text-lg transition duration-300"
    >
      📜 Questlogg (Prosjekter)
    </router-link>
    <router-link
      to="/internship"
      class="bg-yellow-700 hover:bg-yellow-800 text-white py-3 px-6 rounded-xl shadow-md text-lg transition duration-300"
    >
      📬 Søker Praksisplass
    </router-link>
  </div>
</template>

<script setup lang="ts">
// Ingen logikk nødvendig foreløpig – men her kan vi senere legge til hover-effekter,
// dynamiske kartmarkører, eller bakgrunnsbilde
</script>

<style scoped>
/* Klar for kartgrafikk, pekere, eller interaktive elementer senere */
</style>
