<script setup lang="ts">
import router from '@/router'
import ModuleListComponent from './ModuleListComponent.vue'
import DashboardContent from '@/utils/Data/DashboardContent'
import { onMounted, ref, type Ref } from 'vue'
import ControlsComponent from './controlsComponent.vue'

const isAdmin: Ref<boolean> = ref(false)

onMounted(() => {
  isAdmin.value = JSON.parse(sessionStorage.getItem('ACTUAL_USER') || 'isAdmin: false').isAdmin
})
</script>

<template>
  <menu>
    <div id="app-name" class="font-megrim"><p @click="router.push('/dashboard')">LEAPFORCE</p></div>
    <ModuleListComponent
      :ModuleName="'Gestion de equipos'"
      :list="DashboardContent.MANAGEMENT_LIST"
      v-if="isAdmin"
    />
    <ModuleListComponent
      :ModuleName="'General'"
      :list="DashboardContent.GENERAL_LIST"
      class="module"
    />
    <ControlsComponent id="controls" />
  </menu>
</template>

<style scoped>
menu {
  height: inherit;
  position: relative;

  #app-name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    p {
      font-size: 2em;
    }
  }

  .module::after {
    content: '';
    display: flex;
    height: 1px;
    width: inherit;
    margin: 20px 0 0 0;
    background-color: var(--secondary-900);
  }

  #controls {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
