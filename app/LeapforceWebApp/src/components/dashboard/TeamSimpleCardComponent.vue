<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getMethod } from '../queryComponent'
import { user } from '@/stores/references'
import { User } from '@/stores/Classes/User'

onMounted(async () => {
  getMethod(`teams/${new User().team}`).then((data) => {
    user.value.team = data.body[0].name
  })
})
</script>

<template>
  <div>
    <p id="title">Tu equipo de trabajo</p>
    <p>{{ user.team }}</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 20dvw;
  height: 20dvh;

  #title {
    font-weight: bold;
  }

  p {
    font-size: 1.5em;
  }
}
</style>
