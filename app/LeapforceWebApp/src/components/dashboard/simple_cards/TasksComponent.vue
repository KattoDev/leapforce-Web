<script setup lang="ts">
import { User } from '@/components/dummyInfo'
import router from '@/router'
import TableComponent from '../TableComponent.vue'
import { user } from '@/stores/references'

let userPendingTasks: number = User.tasks.length

function getPendingTasks(): string {
  return userPendingTasks > 0
    ? `${userPendingTasks} pendientes`
    : 'Estás al dia con tus tareas, ten un buen dia'
}

function goToTasks(): void {
  router.push('/tasks')
}

interface Task {
  name: string
  status: string
  deadline: string
}

let userTasks: Array<Task> = []

User.tasks.forEach((value) => {
  let task: Task = {
    name: value.name,
    status: value.status ? 'completada' : 'pendiente',
    deadline: `${value.deadline.getDay()}/${value.deadline.getMonth()}/${value.deadline.getFullYear()} - ${value.deadline.getHours()}:${value.deadline.getMinutes()}`,
  }
  userTasks.push(task)
})

const tableHead: Array<string> = ['nombre', 'estado', 'fecha de entrega']
const tableBody: Array<Task> = userTasks
</script>

<template>
  <div id="container">
    <div id="header">
      <div>
        <p id="title">Tareas pendientes</p>
        <p>{{ getPendingTasks() }}</p>
      </div>
      <button v-on:click="goToTasks()">Ver todas las tareas</button>
    </div>

    <div id="table-container">
      <TableComponent :table-head="tableHead" :table-body="tableBody" />
    </div>
  </div>
</template>

<style scoped>
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
      box-shadow: 0 0 12px var(--shadow);
    }
  }
  #table-container {
    height: 90%;
    overflow: scroll;
    scrollbar-width: none;
  }
}
</style>
