<script setup lang="ts">
import type { ModuleList } from './ModuleInterface'
import router from '@/router'

const props = defineProps<{ ModuleName: string; list: ModuleList[] }>()

function navigate(route: string): void {
  router.push(route)
}
</script>

<template>
  <div class="module-container">
    <p>{{ props.ModuleName }}</p>
    <div class="module" v-for="prop in props.list">
      <div>{{ prop.name }}</div>
      <div v-for="child in prop.children">
        <button v-on:click="navigate(child.route)">
          <img :src="child.icon" />
          {{ child.name }}
        </button>
      </div>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.module-container {
  margin: 20px 20px 0 20px;

  .module {
    margin: 5px 0 0 0;
    background-color: var(--login-box);

    div {
      display: flex;
      align-items: center;
      height: 30px;
      padding: 0 0 0 20px;

      button {
        height: inherit;
        width: 25dvw;
        display: flex;
        align-items: center;
        padding: 0 0 0 20px;
        gap: 40px;
        background-color: var(--sidebar-button);
        border: none;
      }

      button:hover {
        border: 1px dashed var(--shadow);
      }
    }
  }
}
</style>
