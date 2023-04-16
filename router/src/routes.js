import Home from './views/Home.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'home',
    component: () => import('./views/About.vue'),
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
  },
];
