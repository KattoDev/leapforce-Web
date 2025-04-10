<script setup lang="ts">
import EditTeam_EditInfo from "@/components/forms/EditTeam_EditInfo.vue";
import DashboardBase from "@/components/layout/DashboardBase.vue";
import ModuleName from "@/components/layout/moduleName.vue";
</script>

<template>
  <DashboardBase>
    <div class="content">
      <div class="card">
        <ModuleName module-name="Editar equipo de trabajo" />
        <EditTeam_EditInfo />
      </div>
    </div>
  </DashboardBase>
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
