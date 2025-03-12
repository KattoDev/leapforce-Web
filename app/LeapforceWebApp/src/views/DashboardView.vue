<script setup lang="ts">
import TasksComponent from '@/components/dashboard/simple_cards/TasksComponent.vue'
import TeamComponent from '@/components/dashboard/simple_cards/TeamComponent.vue'
import UserComponent from '@/components/dashboard/simple_cards/UserComponent.vue'
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
</script>

<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <SidebarComponent />
    </div>
    <div class="content">
      <UserComponent class="card" />
      <div id="frame">
        <TasksComponent class="card" />
        <TeamComponent class="card" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar,
.content {
  border-radius: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  #frame {
    display: flex;
    gap: 10px;
  }
}
</style>
