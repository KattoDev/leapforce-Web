<script setup lang="ts">
const props = defineProps<{ moduleName: string }>()
</script>

<template>
  <header>
    <p class="module-name">{{ props.moduleName }}</p>
  </header>
</template>

<style scoped lang="css"></style>
