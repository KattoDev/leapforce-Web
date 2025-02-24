<script setup>
import TaskSimpleCardComponent from '@/components/dashboard/TaskSimpleCardComponent.vue'
import TeamSimpleCardComponent from '@/components/dashboard/TeamSimpleCardComponent.vue'
import UserSimpleCardComponent from '@/components/dashboard/UserSimpleCardComponent.vue'
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
</script>

<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <SidebarComponent />
    </div>
    <div class="content">
      <UserSimpleCardComponent class="card" />
      <div id="frame">
        <TaskSimpleCardComponent class="card" />
        <TeamSimpleCardComponent class="card" />
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
