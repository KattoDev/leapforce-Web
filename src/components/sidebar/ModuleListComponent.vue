<script setup lang="ts">
import type { ModuleList } from '@/utils/interfaces/sidebarModule'
import router from '@/router'

const props = defineProps<{ ModuleName: string; list: ModuleList[] }>()

function navigate(route: string): void {
  router.push(route)
}
</script>

<template>
  <section>
    <p class="module-name">{{ props.ModuleName }}</p>
    <div class="module" v-for="prop in props.list" :key="prop.name">
      <p>{{ prop.name }}</p>
      <div v-for="child in prop.children" :key="child.name">
        <button v-on:click="navigate(child.route)">
          {{ child.name }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css">
section {
  margin: 20px 20px 0 20px;

  .module-name {
    font-size: 1em;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
  }

  .module {
    margin: 5px 0 0 0;

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
        background-color: var(--primary-100);
        border: none;
        text-transform: uppercase;
        font-weight: 400;
      }

      button:hover {
        border: 1px dotted var(--secondary-500);
        cursor: pointer;
      }
    }
  }
}
</style>
