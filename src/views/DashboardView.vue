<script setup lang="ts">
import TasksComponent from '@/components/simple_cards/TasksComponent.vue'
import TeamComponent from '@/components/simple_cards/TeamComponent.vue'
import UserComponent from '@/components/simple_cards/UserComponent.vue'
import DashboardBase from '@/components/DashboardBase.vue'
</script>

<template>
  <DashboardBase>
    <section class="content">
      <UserComponent class="card" />
      <div id="frame">
        <TasksComponent class="card" />
        <TeamComponent class="card" />
      </div>
    </section>
  </DashboardBase>
</template>

<style scoped>
.sidebar,
.content {
  border-radius: 10px;
}

section {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  #frame {
    display: flex;
    gap: 10px;
  }
}
</style>
