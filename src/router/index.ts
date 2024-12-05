import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-employees',
    name: 'add-employees',
    component: () => import('../views/AddView.vue')
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: () => import('../views/DoctorsView.vue')
  },
  {
    path: '/nurses',
    name: 'nurses',
    component: () => import('../views/NursesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
