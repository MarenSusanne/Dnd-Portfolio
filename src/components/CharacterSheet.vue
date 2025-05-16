<template>
  <div class="max-w-2xl mx-auto bg-amber-100 shadow-xl rounded-2xl p-6 font-serif border-4 border-yellow-800">
    <!-- Header -->
    <div class="text-center mb-4">
      <h1 class="text-3xl font-bold text-yellow-900">{{ character.name }}</h1>
      <p class="text-yellow-800 italic">{{ character.class }} — Level {{ character.level }}</p>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-3 gap-4 text-center mb-6">
      <div v-for="(value, stat) in character.stats" :key="stat" class="bg-yellow-200 p-3 rounded-xl shadow-inner">
        <p class="font-bold text-yellow-900">{{ stat }}</p>
        <p class="text-2xl">{{ value }}</p>
      </div>
    </div>

    <!-- Skills -->
    <div class="mb-6">
      <h2 class="text-xl font-bold text-yellow-900 mb-2">Skills</h2>
      <ul class="list-disc list-inside text-yellow-900">
        <li v-for="skill in character.skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>

    <!-- Traits -->
    <div class="mb-6">
      <h2 class="text-xl font-bold text-yellow-900 mb-2">Traits</h2>
      <ul class="flex flex-wrap gap-2">
        <li v-for="trait in character.traits" :key="trait" class="bg-yellow-300 px-3 py-1 rounded-full text-sm shadow">
          {{ trait }}
        </li>
      </ul>
    </div>

    <!-- Lore / Bio -->
    <div class="bg-yellow-200 p-4 rounded-xl shadow-inner">
      <h2 class="text-xl font-bold text-yellow-900 mb-2">Lore</h2>
      <p class="text-yellow-900 leading-relaxed">{{ character.lore }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Character {
  name: string;
  class: string;
  level: number;
  stats: Record<string, number>;
  skills: string[];
  traits: string[];
  lore: string;
}

const character: Character = {
  name: 'Maren Susanne Tveit',
  class: 'Frontend Sorcerer',
  level: 7,
  stats: {
    STR: 8,
    CON: 10,
    DEX: 12,
    INT: 18,
    WIS: 15,
    CHA: 14,
  },
  skills: ['TypeScript', 'Vue 3', 'CSS Magic', 'Component Alchemy'],
  traits: ['Creative Thinker', 'Debugging Instincts', 'Team Player'],
  lore: 'Lore incoming...'
};
</script>

<style scoped>
/* Her kan du legge til ekstra visuelle effekter senere */
</style>
