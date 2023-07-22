import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
