<script setup lang="ts">
import { defineProps } from 'vue'
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

  border: 1px solid red;

  .module {
    margin: 5px 0 0 0;
    background-color: blueviolet;
    border: 1px solid blue;

    div {
      display: flex;
      align-items: center;
      border: 1px solid black;
      height: 30px;
      padding: 0 0 0 20px;

      button {
        height: inherit;
        width: 25dvw;
        display: flex;
        align-items: center;
        padding: 0 0 0 20px;
        gap: 40px;
      }
    }
  }
}
</style>
