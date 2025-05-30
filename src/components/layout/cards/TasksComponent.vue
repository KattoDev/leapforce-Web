<script setup lang="ts">
import { useTaskStore } from "@/stores/tasks";
import { formatDate } from "@/utils/helpers/dateFormatter";
import routeRedirect from "@/utils/helpers/routeRedirect";
import tasks from "@/utils/helpers/tasks";
import type { Task } from "@/utils/types/tasks";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { onMounted, ref, type Ref } from "vue";

const tasksList: Ref<Task[]> = ref([]);

onMounted(() => {
  tasksList.value = useTaskStore()
    .tasks.filter((task) => !task.isFinished)
    .map((task) => ({
      name: task.name,
      status: "sin completar",
      deadline: formatDate(
        task.endDate.toDate().getDay(),
        task.endDate.toDate().getMonth(),
        task.endDate.toDate().getFullYear()
      ),
    }));
});
</script>

<template>
  <div id="container">
    <div id="header">
      <div>
        <p id="title">Tareas pendientes</p>
        <p>{{ tasks.getPending(tasksList.length) }}</p>
      </div>
      <Button
        label="Ver todas las tareas"
        severity="secondary"
        v-on:click="routeRedirect.goTo('/dashboard/tasks-management')"
      />
    </div>

    <div id="table-container" v-if="tasksList.length > 1">
      <DataTable :value="tasksList" tableStyle="min-width: 50rem">
        <Column field="name" header="Nombre"></Column>
        <Column field="status" header="Estado"></Column>
        <Column field="deadline" header="Fecha de entrega"></Column>
      </DataTable>
    </div>
  </div>
</template>

<style scoped lang="css">
#container {
  overflow: hidden;
  width: 60dvw;
  height: 86dvh;

  #header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.5em;
    }
    #title {
      font-weight: bold;
    }

    datatable {
      border-radius: 20px;
    }

    button {
      background: var(--p-secondary-100);
    }

    button:hover {
      border: 1px solid var(--p-secondary-200);
    }
  }
  #table-container {
    height: 90%;
    overflow: scroll;
    scrollbar-width: none;
    border-radius: 5px;
  }
}
</style>
