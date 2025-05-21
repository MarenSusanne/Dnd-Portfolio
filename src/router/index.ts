import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../components/Landing.vue'
import CharacterSheet from '../components/CharacterSheet.vue'

const routes = [
  {
    path: '/',
    component: Landing,
    meta: { transition: null },
  },
  {
    path: '/character',
    component: CharacterSheet,
    meta: { transition: 'curtain-up' },
  },
]


export const router = createRouter({
  history: createWebHistory('/Dnd-Portfolio/'),
  routes
})
