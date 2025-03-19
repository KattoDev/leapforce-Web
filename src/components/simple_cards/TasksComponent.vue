<script setup lang="ts">
import TableComponent from '@/components/TableComponent.vue'
import router from '@/router'
import tasks from '@/utils/controllers/tasks'
import { fakedTasks } from '@/utils/helpers/dummyInfo'
import type { Task } from '@/utils/interfaces/tasks'

const userPendingTasks: number = fakedTasks.length

function goToTasks(): void {
  router.push('/tasks')
}

const tablebodyContent = fakedTasks

const tableHead: Array<string> = ['nombre', 'estado', 'fecha de entrega']
const tableBody: Array<Task> = tablebodyContent
</script>

<template>
  <div id="container">
    <div id="header">
      <div>
        <p id="title">Tareas pendientes</p>
        <p>{{ tasks.getPending(userPendingTasks) }}</p>
      </div>
      <button v-on:click="goToTasks()" class="button">Ver todas las tareas</button>
    </div>

    <div id="table-container">
      <TableComponent :table-head="tableHead" :table-body="tableBody" />
    </div>
  </div>
</template>

<style scoped lang="css">
#container {
  overflow: hidden;
  width: 60dvw;
  height: 83.5dvh;

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
    button {
      height: 30px;
      width: 250px;
      border-radius: 20px;
      border: none;
      font-size: 1em;
      background: var(--login-gradient);
    }
    button:hover {
      box-shadow: 0 0 12px var(--secondary-200);
    }
  }
  #table-container {
    height: 90%;
    overflow: scroll;
    scrollbar-width: none;
  }
}
</style>
