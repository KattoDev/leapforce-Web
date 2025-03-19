import pageGuard from '@/utils/helpers/pageGuard'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { title: 'Login', requiresAuth: false, adminModule: false },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { title: 'Dashboard', requiresAuth: true, adminModule: false },
    },

    // members management
    {
      path: '/dashboard/members-management/list',
      name: 'all-members',
      component: () => import('@/views/members_management/ListAllMembersView.vue'),
      meta: { title: 'Todos los miembros', requiresAuth: true, adminModule: true },
    },
    {
      path: '/dashboard/members-management/edit',
      name: 'edit-member',
      component: () => import('@/views/members_management/EditInfoView.vue'),
      meta: { title: 'editar miembro', requiresAuth: true, adminModule: true },
    },

    // teams management
    {
      path: '/dashboard/teams-management/list',
      name: 'all-teams',
      component: () => import('@/views/teams_management/ListAllTeamsView.vue'),
      meta: { title: 'Listar equipos', requiresAuth: true, adminModule: true },
    },
    {
      path: '/dashboard/teams-management/edit',
      name: 'edit-team',
      component: () => import('@/views/DashboardView.vue'),
      meta: { title: 'Editar equipo', requiresAuth: true, adminModule: true },
    },

    // projects and tasks management
    {
      path: '/dashboard/tasks-management',
      name: 'tasks',
      component: () => import('@/views/DashboardView.vue'),
      meta: { title: 'Gestión de tareas', requiresAuth: true, adminModule: false },
    },
    {
      path: '/dashboard/projects-management',
      name: 'projects',
      component: () => import('@/views/DashboardView.vue'),
      meta: { title: 'Gestión de proyectos', requiresAuth: true, adminModule: true },
    },

    // member profile
    {
      path: '/dashboard/profile',
      name: 'user-profile',
      component: () => import('@/views/UserProfileView.vue'),
      meta: { title: 'Tu perfil', requiresAuth: true, adminModule: false },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  // change page title
  document.title = to.meta.title as string

  if (to.meta.requiresAuth && !pageGuard.userAuth()) {
    alert('Por favor inicia sesión para continuar')
    return next('/')
  }

  if (to.meta.adminModule && !pageGuard.isAdmin()) {
    return next('/dashboard')
  }

  next()
})

export default router
