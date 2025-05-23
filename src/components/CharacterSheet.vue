<template>
  <div class="border">
    <!-- Header -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 text-center md:text-left">
      <img
        v-if="character.image"
        :src="character.image"
        alt="Portrett av {{ character.name }}"
        class="object-cover rounded-full border-4 border-yellow-700 shadow"
      />

      <div>
        <h1 class="text-3xl font-bold text-yellow-900">{{ character.name }}</h1>
        <p class="text-yellow-800 italic">{{ character.class }} — Level {{ character.level }}</p>
        <p class="text-yellow-700 text-sm mt-2 italic">
          Jeg jobber fortsatt med å fylle ut denne delen av porteføljen. Kom gjerne tilbake senere!
        </p>
      </div>
    </div>
    <!-- Stats -->
    <div class="grid grid-cols-3 gap-4 text-center mb-6">
      <div v-for="(value, stat) in character.stats" :key="stat" class="bg-yellow-200 p-3 rounded-xl shadow-inner">
        <p class="font-bold text-yellow-900">{{ stat }}</p>
        <p class="text-2xl">{{ value }}</p>
      </div>
    </div>
    <div class="flex flex-row justify-center gap-8 mb-6">
      <!-- Skills -->
      <div class="flex-1 mb-6">
        <h2 class="text-xl font-bold text-yellow-900 mb-2">Skills</h2>
        <div class="list-disc list-inside text-yellow-900">
          <div v-for="skill in character.skills" :key="skill">{{ skill }}</div>
        </div>
      </div>
      
      <!-- Traits -->
      <div class="flex-1">
        <h2 class="">Traits</h2>
        <div class="">
          <div v-for="trait in character.traits" :key="trait" class="bg-yellow-300 px-3 py-1 rounded-full text-sm shadow">
            {{ trait }}
          </div>
        </div>
      </div>
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
  image?: string
}

const character: Character = {
  name: 'Maren Susanne Tveit',
  class: 'Frontend Sorcerer',
  level: 3,
  stats: {
    STR: 8,
    CON: 12,
    DEX: 11,
    INT: 16,
    WIS: 17,
    CHA: 12,
  },
  skills: ['JavaScript', 'Vue 3', 'HTML/CSS', 'TypeScript'],
  traits: ['Creative Thinker', 'Problem Solver', 'Team Player'],
  lore: 'Jeg er en nysgjerrig og løsningsorientert frontend-utvikler med forkjærlighet for visuelle konsepter. Denne delen av porteføljen er fortsatt i vekst – akkurat som meg.',
  image: '/Dnd-Portfolio/Meee.jpg',
};
</script>

<style scoped>
  .border{
    border: 4px solid white;
    padding: 15px;
  }
  img{
    height: 100px;
  }
</style>
