<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import { sessionGuard } from '@/components/pageGuard'
import TableComponent from '@/components/dashboard/TableComponent.vue'
import AddUserModal from '@/components/dashboard/modals/AddUser/AddUserModal.vue'
import { ref } from 'vue'

sessionGuard()

interface User {
  name: string
  phone: number
  email: string
  isAdmin: string
}

const modal = ref({
  isHidden: true,
})

let TableData = {
  tableHead: ['nombre', 'número de telefono', 'correo electronico', 'Administrador'],
  tableBody: [{}],
}

for (let index = 1; index < 30; index++) {
  let user: User = {
    name: `nombre ${index}`,
    phone: Math.random(),
    email: 'email@ema.com',
    isAdmin: Math.random().toFixed().toString() === '1' ? 'Sí' : 'No',
  }
  TableData.tableBody.push(user)
}

function openModal() {
  modal.value.isHidden = !modal.value.isHidden
}

function closeModal(isClosed: boolean) {
  modal.value.isHidden = isClosed
}
</script>

<template>
  <div class="dashboard-container">
    <AddUserModal @close-modal="closeModal" :class="modal.isHidden ? 'modal-hidden' : ''" />
    <div class="sidebar">
      <SidebarComponent />
    </div>
    <div class="content">
      <div>
        <p class="module-name">Todos los miembros del equipo</p>

        <div><button @click="openModal">Añadir nuevo usuario</button></div>
      </div>
      <TableComponent :table-head="TableData.tableHead" :table-body="TableData.tableBody" />
    </div>
  </div>
</template>

<style scoped>
.sidebar,
.content {
  border-radius: 10px;
}

.content {
  background-color: var(--login-box);
  box-shadow: 0 0 12px var(--shadow);
  border-radius: 10px;
  padding: 20px;
  height: 93.5dvh;
  overflow: scroll;

  div {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
}
</style>
