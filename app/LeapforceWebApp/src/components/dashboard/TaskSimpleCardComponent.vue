<script setup lang="ts">
import { User } from '@/components/dummyInfo'
import router from '@/router'

let userPendingTasks: number = User.tasks.length

function getPendingTasks(): string {
  return userPendingTasks > 0
    ? `${userPendingTasks} pendientes`
    : 'Estás al dia con tus tareas, ten un buen dia'
}

function goToTasks(): void {
  router.push('/tasks')
}
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
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Fecha de fin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in User.tasks">
            <td>{{ task.taskName }}</td>
            <td>{{ task.status ? 'completada' : 'sin completar' }}</td>
            <td>
              {{ task.deadline.getDay() }}/{{ task.deadline.getMonth() }}/{{
                task.deadline.getFullYear()
              }}
            </td>
          </tr>
        </tbody>
      </table>
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

    table {
      margin: 10px 0 0 0;
      border-collapse: collapse;
      padding: 5px;
      width: 100%;
      height: 40dvh;
      max-height: 40dvh;

      th {
        border: 1px solid black;
        padding: 5px 0 5px 0;
      }
      td {
        text-align: center;
        border: 1px solid black;
        padding: 10px 0 10px 0;
      }
    }
  }
}
</style>
