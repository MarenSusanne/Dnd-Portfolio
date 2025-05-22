import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../components/Landing.vue'
import CharacterSheet from '../components/CharacterSheet.vue'
import Projects from '../components/Projects.vue'
import Map from '../components/Map.vue'
import Internship from '../components/Internship.vue'

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
  {
    path: '/projects',
    component: Projects,
    meta: { transition: null },
  },
  {
    path: '/map',
    component: Map,
    meta: { transition: null },
  },
  {
    path: '/internship',
    component: Internship,
    meta: { transition: null },
  },
]


export const router = createRouter({
  history: createWebHistory('/Dnd-Portfolio/'),
  routes
})
