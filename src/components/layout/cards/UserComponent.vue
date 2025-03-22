<script setup lang="ts">
import { useSessionStore } from "@/stores/session";
import { getGreeting } from "@/utils/helpers/dateFormatter";
import { onMounted, ref } from "vue";

const userName = ref("Cargando...");

onMounted(() => {
  userName.value = useSessionStore().name;
});
</script>

<template>
  <div>
    <p>{{ getGreeting() }}</p>
    <p id="user-name">{{ userName }}</p>
  </div>
</template>

<style scoped>
div {
  width: inherit;
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
