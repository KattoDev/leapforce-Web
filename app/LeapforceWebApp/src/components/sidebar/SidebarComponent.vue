<script setup lang="ts">
import type { ModuleList } from './ModuleInterface'
import ModuleListComponent from './ModuleListComponent.vue'

const MANAGEMENT_LIST: ModuleList[] = [
  {
    name: 'module 1',
    children: [
      {
        name: 'submodule 1',
        icon: 'icon submodule',
        route: 'route 1',
      },
      {
        name: 'submodule 2',
        icon: 'icon submodule',
        route: 'route 2',
      },
      {
        name: 'submodule 2',
        icon: 'icon submodule',
        route: 'route 2',
      },
    ],
  },
  {
    name: 'module 2',
    children: [
      {
        name: 'submodule 1',
        icon: 'icon submodule',
        route: 'route 1',
      },
      {
        name: 'submodule 2',
        icon: 'icon submodule',
        route: 'route 2',
      },
      {
        name: 'submodule 2',
        icon: 'icon submodule',
        route: 'route 2',
      },
    ],
  },
]

const GENERAL_LIST: ModuleList[] = [
  {
    name: 'module 1',
    children: [
      {
        name: 'submodule 1',
        icon: 'icon submodule',
        route: 'route 1',
      },
      {
        name: 'submodule 2',
        icon: 'icon submodule',
        route: 'route 2',
      },
      {
        name: 'submodule 2',
        icon: 'icon submodule',
        route: 'route 2',
      },
    ],
  },
]
</script>

<template>
  <div id="app-name" class="megrim"><p>LEAPFORCE</p></div>
  <hr />
  <ModuleListComponent :ModuleName="'Gestion de equipos'" :list="MANAGEMENT_LIST" />
  <ModuleListComponent :ModuleName="'General'" :list="GENERAL_LIST" />
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
