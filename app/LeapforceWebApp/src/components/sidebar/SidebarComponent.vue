<script setup lang="ts">
import router from '@/router'
import type { ModuleList } from './ModuleInterface'
import ModuleListComponent from './ModuleListComponent.vue'

const MANAGEMENT_LIST: ModuleList[] = [
  {
    name: 'Miembros del equipo',
    children: [
      {
        name: 'Listar',
        icon: 'icon submodule',
        route: '/dashboard/members-management/list',
      },
      {
        name: 'Editar información',
        icon: 'icon submodule',
        route: '/dashboard/members-management/edit',
      },
    ],
  },
  {
    name: 'Equipos de trabajo',
    children: [
      {
        name: 'Listar',
        icon: 'icon submodule',
        route: '/dashboard/teams-management/list',
      },
      {
        name: 'Administrar',
        icon: 'icon submodule',
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
        icon: 'icon submodule',
        route: '/dashboard/tasks-management',
      },
      {
        name: 'Gestion de Proyectos',
        icon: 'icon submodule',
        route: '/dashboard/projects-management',
      },
    ],
  },
  {
    name: 'perfil de usuario',
    children: [
      { name: 'editar perfil del usuario', icon: 'icon submodule', route: '/dashboard/profile' },
    ],
  },
]

function logout() {
  sessionStorage.clear()
  router.push('/')
  window.location.reload()
}
</script>

<template>
  <div id="app-name" class="megrim"><p @click="router.push('/dashboard')">LEAPFORCE</p></div>
  <hr />
  <ModuleListComponent :ModuleName="'Gestion de equipos'" :list="MANAGEMENT_LIST" />
  <ModuleListComponent :ModuleName="'General'" :list="GENERAL_LIST" />
  <hr />
  <button @click="logout">Cerrar sesión</button>
</template>

<style scoped>
#app-name {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  p {
    font-size: 2em;
  }
}
</style>
