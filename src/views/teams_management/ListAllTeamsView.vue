<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import type { Team } from '@/utils/Classes/Team'
import leapforceResource from '@/utils/helpers/leapforceResource'
import type { TeamCard } from '@/utils/interfaces/cards'
import { onMounted, ref, type Ref } from 'vue'

const teams: Ref<TeamCard[]> = ref([])

onMounted(() => {
  leapforceResource.get('teams').then((teamsRecived: Team[]) => {
    const teamsLoaded: TeamCard[] = teamsRecived.map((team: Team) => ({
      TMID: team.TMID,
      name: team.name,
    }))

    teams.value = teamsLoaded
  })
})
</script>

<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <SidebarComponent />
    </div>
    <div class="content">
      <div><p class="module-name">Todos los equipos</p></div>

      <div id="teams-container">
        <div class="team-card" v-for="team in teams" :key="team.TMID">
          <p>{{ team.name }}</p>
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
  background-color: var(--primary-10);
  box-shadow: 0 0 12px var(--secondary-200);
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
      background-color: var(--secondary-200);
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
