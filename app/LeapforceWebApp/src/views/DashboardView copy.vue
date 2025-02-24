<script setup>
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
</script>

<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <SidebarComponent />
    </div>
    <div class="content"></div>
  </div>
</template>

<style scoped>
.sidebar,
.content {
  border-radius: 10px;
}
</style>
