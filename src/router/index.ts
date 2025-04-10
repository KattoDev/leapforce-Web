import LoginView from "@/views/auth/LoginView.vue";
import DashboardView from "@/views/dashboard/DashboardView.vue";
import UserProfileView from "@/views/dashboard/UserProfileView.vue";
import EditInfoView from "@/views/members_management/EditInfoView.vue";
import ListAllMembersView from "@/views/members_management/ListAllMembersView.vue";
import EditTeamView from "@/views/teams_management/EditTeamView.vue";
import ListAllTeamsView from "@/views/teams_management/ListAllTeamsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
      meta: { title: "Login", requiresAuth: false, adminModule: false },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: { title: "Dashboard", requiresAuth: true, adminModule: false },
    },

    // members management
    {
      path: "/dashboard/members-management/list",
      name: "all-members",
      component: ListAllMembersView,
      meta: {
        title: "Todos los miembros",
        requiresAuth: true,
        adminModule: true,
      },
    },
    {
      path: "/dashboard/members-management/edit",
      name: "edit-member",
      component: EditInfoView,
      meta: { title: "editar miembro", requiresAuth: true, adminModule: true },
    },

    // teams management
    {
      path: "/dashboard/teams-management/list",
      name: "all-teams",
      component: ListAllTeamsView,
      meta: { title: "Listar equipos", requiresAuth: true, adminModule: true },
    },
    {
      path: "/dashboard/teams-management/edit",
      name: "edit-team",
      component: EditTeamView,
      meta: { title: "Editar equipo", requiresAuth: true, adminModule: true },
    },

    // projects and tasks management
    {
      path: "/dashboard/tasks-management",
      name: "tasks",
      component: () => import("@/views/dashboard/DashboardView.vue"),
      meta: {
        title: "Gestión de tareas",
        requiresAuth: true,
        adminModule: false,
      },
    },
    {
      path: "/dashboard/projects-management",
      name: "projects",
      component: () => import("@/views/dashboard/DashboardView.vue"),
      meta: {
        title: "Gestión de proyectos",
        requiresAuth: true,
        adminModule: true,
      },
    },

    // member profile
    {
      path: "/dashboard/profile",
      name: "user-profile",
      component: UserProfileView,
      meta: { title: "Tu perfil", requiresAuth: true, adminModule: false },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  // change page title
  document.title = to.meta.title as string;
  /* 
  if (to.meta.requiresAuth && !pageGuard.userAuth()) {
    alert("Por favor inicia sesión para continuar");
    return next("/");
  } */
  /* 
  if (to.meta.adminModule && !pageGuard.isAdmin()) {
    return next("/dashboard");
  } */

  next();
});

export default router;
