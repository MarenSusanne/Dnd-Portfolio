<template>
  <div class="min-h-screen bg-amber-100 px-6 py-10 font-serif">
    <h1 class="text-4xl text-center font-bold text-yellow-900 mb-10">
      📜 Prosjektlogg
    </h1>

    <div class="">
      <div
        v-for="project in projects"
        :key="project.title"
        class="border-4 card"
      >
        <h2 class="text-2xl font-bold">{{ project.title }}</h2>
        <p class="">{{ project.description }}</p>

        <div class="">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class=""
          >
            {{ tech + ", "}}
          </span>
        </div>

        <div class="">
            <a
            v-if="project.repo"
            :href="project.repo"
            target="_blank"
            class="hover:underline"
            >
            📁 GitHub
        </a>
        <a
        v-if="project.pages"
        :href="project.pages"
        target="_blank"
        class="hover:underline"
        >
        🌐 GitHub Pages
    </a>
    <a
      v-if="project.website"
      :href="project.website"
      target="_blank"
      class="hover:underline"
    >
      🔗 {{ cleanUrl(project.website) }}
    </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  technologies: string[]
  repo?: string
  pages?: string
  website?: string
}

function cleanUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '')
}

const projects: Project[] = [
  {
    title: 'Kunst Tavla',
    description: 'Et lite frontend-prosjekt som bruker Vue 3 og gir oversikt over magiske bøker.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind'],
    repo: 'https://github.com/MarenSusanne/Kunst-Tavla',
    pages: 'https://marensusanne.github.io/Kunst-Tavla/'
  },
  {
    title: 'Wünderbite',
    description: 'Et interaktivt kart som lar brukeren utforske ulike deler av porteføljen.',
    technologies: ['SVG', 'Vue Router', 'CSS animasjoner'],
    repo: 'https://github.com/MarenSusanne/Wunderbite',
    website: 'https://wunderbite.org'
  },
  {
    title: 'DnD Monster Searcher',
    description: 'En visuell todo-liste presentert som et oppdragstavle fra et eventyrspill.',
    technologies: ['Pinia', 'Vue', 'LocalStorage'],
    repo: 'https://github.com/MarenSusanne/dnd-monster-searcher',
    pages: 'https://marensusanne.github.io/dnd-monster-searcher/'
  },
  {
    title: 'Stemmegivning',
    description: 'En visuell todo-liste presentert som et oppdragstavle fra et eventyrspill.',
    technologies: ['Pinia', 'Vue', 'LocalStorage'],
    repo: 'https://github.com/MarenSusanne/bilshow-voting',
    website: 'https://bilshow-voting.vercel.app'
  },
]
</script>

<style scoped>
    .card {
        margin-bottom: 25px;
    }
</style>
