<script setup lang="ts">
import { User } from '@/components/dummyInfo'

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
</script>

<template>
  <div>
    <p>{{ getGreeting() }}</p>
    <p id="user-name">{{ User.name }}</p>
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
