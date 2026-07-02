import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Attractions from '../views/Attractions.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/attractions', name: 'Attractions', component: Attractions }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router