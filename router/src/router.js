import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue'),
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
