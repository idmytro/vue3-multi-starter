import { type RouteRecordRaw } from 'vue-router'
import HomePage from './HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
]

export default routes
