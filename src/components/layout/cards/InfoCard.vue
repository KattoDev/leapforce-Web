<script setup lang="ts">
import Card from "primevue/card";
import Divider from "primevue/divider";

const props = defineProps<{ cardname: string; info1: string; info2: string }>();
</script>

<template>
  <Card>
    <template #title>
      {{ props.cardname }}
      <Divider />
    </template>
    <template #content>
      <p class="m-0">{{ props.info1 }}</p>
      <p class="m-0">{{ props.info2 }}</p>
    </template>
  </Card>
</template>
