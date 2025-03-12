<script setup lang="ts">
interface Table {
  tableHead: Array<string>
  tableBody: Object
}

const props = defineProps<Table>()
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in props.tableHead" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in props.tableBody" :key="index">
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
