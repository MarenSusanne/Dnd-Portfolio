<template>
   <div class="full-screen-landing">
    <div
    :class="[
      'w-screen h-screen flex flex-col items-center justify-center text-center transition-transform duration-1000 bg-cover bg-center',
      { 'fly-away': isLeaving }
    ]"
    :style="{ backgroundImage: `url(${curtainUrl})`}"
  >
      <h1 class="text-4xl font-serif font-bold">
        Velkommen til Marens verden
      </h1>
      <p class="text-lg">
        En levende portefølje. Trykk for å avsløre innholdet under.
      </p>
      <button
        @click="reveal"
        class="hover:bg-yellow-800 font-bold rounded-2xl transition duration-300"
      >
        🎭 Enter
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isLeaving = ref(false)
const router = useRouter()
const curtainUrl = `${import.meta.env.BASE_URL}curtain.png`

function reveal() {
  isLeaving.value = true
  setTimeout(() => {
    router.push('/character')
  }, 1000) // matcher CSS duration
}
</script>

<style scoped>
.full-screen-landing {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 50;
  transform: translateY(0);
  transition: transform 1s ease;
  filter: grayscale(100%);
}

.fly-away {
  transform: translateY(-100vh);
  transition: transform 1s ease;
}
</style>