import { type RouteRecordRaw } from 'vue-router'
import NotFoundPage from './NotFoundPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
]

export default routes
