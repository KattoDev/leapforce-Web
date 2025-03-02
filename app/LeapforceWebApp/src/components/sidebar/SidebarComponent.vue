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
        route: '/team-members',
      },
      {
        name: 'Editar información',
        icon: 'icon submodule',
        route: '/edit-team-member',
      },
    ],
  },
  {
    name: 'Equipos de trabajo',
    children: [
      {
        name: 'Listar',
        icon: 'icon submodule',
        route: '/teams',
      },
      {
        name: 'Administrar',
        icon: 'icon submodule',
        route: '/edit-team-info',
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
        route: '/tasks',
      },
      {
        name: 'Gestion de Proyectos',
        icon: 'icon submodule',
        route: '/projects',
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
  <div id="app-name" class="megrim"><p>LEAPFORCE</p></div>
  <hr />
  <ModuleListComponent :ModuleName="'Gestion de equipos'" :list="MANAGEMENT_LIST" />
  <ModuleListComponent :ModuleName="'General'" :list="GENERAL_LIST" />
  <hr />
  <button v-on:click="logout">Cerrar sesión</button>
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
