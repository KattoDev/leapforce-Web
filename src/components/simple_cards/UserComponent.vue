<script setup lang="ts">
import { sessionGuard } from '@/utils/helpers/pageGuard'
import { Session } from '@/utils/Classes/Session'
import { User } from '@/utils/Classes/User'

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

const user: User = new Session()
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
