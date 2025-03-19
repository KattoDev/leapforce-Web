<script setup lang="ts">
import type { Table } from '@/utils/interfaces/tables'

const props = defineProps<Table>()
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in props.tableHead" :key="index">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in props.tableBody" :key="rowIndex">
        <td v-for="(value, key) in row" :key="key">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
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
</style>
