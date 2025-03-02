import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/dashboard/profile',
      name: 'user-profile',
      component: UserProfileView,
    },
  ],
})

export default router
