import type { ModuleList } from '@/utils/interfaces/sidebarModule'

const MANAGEMENT_LIST: ModuleList[] = [
  {
    name: 'Miembros del equipo',
    children: [
      {
        name: 'Listar',
        route: '/dashboard/members-management/list',
      },
      {
        name: 'Editar información',
        route: '/dashboard/members-management/edit',
      },
    ],
  },
  {
    name: 'Equipos de trabajo',
    children: [
      {
        name: 'Listar',
        route: '/dashboard/teams-management/list',
      },
      {
        name: 'Administrar',
        route: '/dashboard/teams-management/edit',
      },
    ],
  },
]

const GENERAL_LIST: ModuleList[] = [
  {
    name: 'Tareas y proyectos',
    children: [
      {
        name: 'Gestion de tareas',
        route: '/dashboard/tasks-management',
      },
      {
        name: 'Gestion de Proyectos',
        route: '/dashboard/projects-management',
      },
    ],
  },
  /* {
    name: 'perfil de usuario',
    children: [
      {
        name: 'editar perfil del usuario',
        route: '/dashboard/profile',
      },
    ],
  }, */
]

export default { MANAGEMENT_LIST, GENERAL_LIST }
