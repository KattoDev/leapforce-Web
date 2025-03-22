<script setup lang="ts">
import SidebarComponent from "@/components/layout/SidebarComponent.vue";
</script>

<template>
  <main class="dashboard-container">
    <aside class="sidebar">
      <SidebarComponent />
    </aside>
    <slot class="content"></slot>
  </main>
</template>

<style scoped lang="css">
.sidebar,
.content {
  border-radius: 10px;
}
</style>
