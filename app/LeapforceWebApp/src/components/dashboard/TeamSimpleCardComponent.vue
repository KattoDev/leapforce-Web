<script setup>
import { User } from '@/components/dummyInfo'
</script>

<template>
  <div>
    <p id="title">Tu equipo de trabajo</p>
    <p>{{ User.team }}</p>
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
