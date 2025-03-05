import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import EditInfoView from '@/views/members_management/EditInfoView.vue'
import ListAllView from '@/views/members_management/ListAllView.vue'
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

    // members management
    {
      path: '/dashboard/members-management/list',
      name: 'all-members',
      component: ListAllView,
    },
    {
      path: '/dashboard/members-management/edit',
      name: 'edit-member',
      component: EditInfoView,
    },
    // member profile
    {
      path: '/dashboard/profile',
      name: 'user-profile',
      component: UserProfileView,
    },
  ],
})

export default router
