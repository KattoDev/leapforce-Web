import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import EditInfoView from '@/views/members_management/EditInfoView.vue'
import ListAllMembersView from '@/views/members_management/ListAllMembersView.vue'
import ListAllTeamsView from '@/views/teams_management/ListAllTeamsView.vue'
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
      component: ListAllMembersView,
    },
    {
      path: '/dashboard/members-management/edit',
      name: 'edit-member',
      component: EditInfoView,
    },

    // teams management
    {
      path: '/dashboard/teams-management/list',
      name: 'all-teams',
      component: ListAllTeamsView,
    },
    {
      path: '/dashboard/teams-management/edit',
      name: 'edit-team',
      component: EditInfoView,
    },

    // projects and tasks management
    {
      path: '/dashboard/tasks-management',
      name: 'tasks',
      component: ListAllMembersView,
    },
    {
      path: '/dashboard/projects-management',
      name: 'projects',
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
