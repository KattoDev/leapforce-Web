<script setup lang="ts">
import InfoCard from "@/components/layout/cards/InfoCard.vue";
import DashboardBase from "@/components/layout/DashboardBase.vue";
import ModuleName from "@/components/layout/moduleName.vue";
import { useTeamsStore } from "@/stores/teams";
import { onMounted, ref, type Ref } from "vue";
import { Button } from "primevue";

const teams: Ref<{ name: string; projects: number; users: number }[]> = ref([]);

onMounted(async () => {
  const useTeams = useTeamsStore();

  if (!useTeams.teams.length) {
    useTeams.getTasks();
  } else {
    teams.value = useTeams.teams;
  }
});
</script>

<template>
  <DashboardBase>
    <section class="card w-full overflow-scroll h-[97.5dvh]">
      <div class="flex justify-between items-center">
        <ModuleName module-name="Todos los equipos" class="mb-3" />
        <Button label="Añadir equipo" class="h-10" />
      </div>
      <div v-if="teams.length < 1">
        <ModuleName module-name="cargando equipos..." />
      </div>
      <div class="grid grid-cols-4 gap-2" v-else>
        <InfoCard
          v-for="team in teams"
          :key="team.name"
          :cardname="team.name"
          :info1="'Proyectos pendientes: ' + team.projects"
          :info2="'Miembros: ' + team.users"
        />
      </div>
    </section>
  </DashboardBase>
</template>
