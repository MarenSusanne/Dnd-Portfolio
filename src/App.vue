<template>
  <router-view />
</template>


<!-- <template>
  <div class="relative min-h-screen overflow-hidden">
    <router-view v-slot="{ Component, route }">
      <transition :name="(route.meta.transition as string) || ''" mode="in-out">
        <component :is="Component" class="w-full h-full" />
      </transition>
    </router-view>
  </div>
</template>




<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const transitionName = computed<string>(() => {
  return route.meta.transition as string || 'scene'
})
</script>

<style>
.curtain-up-enter-active,
.curtain-up-leave-active {
  transition: transform 1s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.curtain-up-enter-from {
  transform: translateY(100%);
}

.curtain-up-leave-to {
  transform: translateY(-100%);
}
</style> -->