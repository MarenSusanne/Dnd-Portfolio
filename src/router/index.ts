import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../components/Landing.vue'
import CharacterSheet from '../components/CharacterSheet.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/character', component: CharacterSheet }
]

export const router = createRouter({
  history: createWebHistory('/Dnd-Portfolio/'),
  routes
})
