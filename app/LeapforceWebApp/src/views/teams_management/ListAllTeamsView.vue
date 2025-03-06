<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import { sessionGuard } from '@/components/pageGuard'

sessionGuard()

let teams: Array<string> = []

for (let index = 1; index < 61; index++) {
  teams.push(`team ${index}`)
}
</script>

<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <SidebarComponent />
    </div>
    <div class="content">
      <div><p class="module-name">Todos los equipos</p></div>

      <div id="teams-container">
        <div class="team-card" v-for="team in teams" :key="team">
          <p>{{ team }}</p>
        </div>
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
  background-color: var(--login-box);
  box-shadow: 0 0 12px var(--shadow);
  border-radius: 10px;
  padding: 20px;
  height: 93.5dvh;
  overflow: scroll;

  #teams-container {
    margin: 20px 0 0 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    .team-card {
      width: 250px;
      height: 100px;
      background-color: var(--shadow);
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.5em;
      }
    }
    .team-card:hover {
      cursor: pointer;
    }
  }
}
</style>
