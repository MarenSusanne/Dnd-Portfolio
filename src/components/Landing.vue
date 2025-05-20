<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-100 to-amber-200 flex flex-col items-center justify-center text-center p-8">
    <h1 class="text-3xl font-bold mb-4">
      Kartet er nesten klart... bare ikke helt ennå
    </h1>

    <!-- Progressbar -->
    <div class="w-full max-w-md mt-6">
      <p class="text-yellow-800 text-sm mb-1">🗺️ Kartdata lastes inn... {{ progress }}%</p>
    <div style="width: 100%; height: 10px; background: #585858; border: 1px solid #000; border-radius: 9999px; overflow: hidden;">
      <div
        :style="{ width: progress + '%', height: '100%', background: '#008DA9', borderRadius: '9999px' }"
      ></div>
    </div>
    </div>

    <!-- Knapp (valgfri å vise nå) -->
    <!--
    <router-link
      to="/character"
      class="mt-10 bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition duration-300"
    >
      🧙‍♀️ Gå videre til karakterarket
    </router-link>
    -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const progress = ref(0)

onMounted(() => {
  console.log('🧪 Progressbar startet')

  const interval = setInterval(() => {
    if (progress.value < 99) {
      progress.value += 1
    } else {
      console.log('🔁 Reset progress to 0%')
      progress.value = 0
    }

    console.log(`📊 Progress: ${progress.value}%`)
  }, 100) // juster farten her
})
</script>

<style scoped>
/* Her kan du legge til bakgrunnselementer, bilder, stjerner osv. */
</style>
