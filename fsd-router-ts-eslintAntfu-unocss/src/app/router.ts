import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from '@/pages/home'
import notFoundRoutes from '@/pages/notFound'

const routes = [
  ...homeRoutes,
  ...notFoundRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
