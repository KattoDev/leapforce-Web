<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { sessionGuard } from '@/components/pageGuard'
import { getMethod } from '../queryComponent'
import { user } from '../userInfo'

sessionGuard()

function getGreeting(): string {
  let localhour: number = new Date().getHours()

  if (localhour >= 7 && localhour < 12) {
    return 'Buenos dias ⛅'
  } else if (localhour >= 12 && localhour < 18) {
    return 'Buenas tardes 🌞'
  } else {
    return 'Buenas noches 🌛'
  }
}

onMounted(async () => {
  const USER_UID: number = JSON.parse(localStorage.getItem('session') || '')[0].uid

  getMethod(`users/${USER_UID}`).then((data) => {
    user.value.name = data.body[0].name
  })
})
</script>

<template>
  <div>
    <p>{{ getGreeting() }}</p>
    <p id="user-name">{{ user.name }}</p>
  </div>
</template>

<style scoped>
div {
  width: 100dvw;
  height: max-content;
}
p {
  font-size: 1.2em;
}

#user-name {
  margin: 5px 0 0 0;
  font-weight: bold;
}
</style>
