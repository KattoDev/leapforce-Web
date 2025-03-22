<script setup lang="ts">
import { useSessionStore } from "@/stores/session";
import { onMounted, ref } from "vue";

const userTeam = ref("Cargando...");

onMounted(() => {
  userTeam.value = useSessionStore().teamName;
});
</script>

<template>
  <div>
    <p id="title">Tu equipo de trabajo</p>
    <p>{{ userTeam }}</p>
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
