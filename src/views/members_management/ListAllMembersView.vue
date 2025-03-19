<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import AddUserModal from '@/components/modals/AddUserModal.vue'
import { onMounted, ref } from 'vue'
import leapforceResource from '@/utils/helpers/leapforceResource'
import type { User } from '@/utils/Classes/User'
import type { AllUsersTable } from '@/utils/interfaces/tables'
import TableComponent from '@/components/TableComponent.vue'

const modal = ref({
  isHidden: true,
})

const TableData = ref<AllUsersTable>({
  tableHead: ['nombre', 'número de telefono', 'correo electronico', 'Administrador'],
  tableBody: [],
})

function openModal() {
  modal.value.isHidden = !modal.value.isHidden
}

function closeModal(isClosed: boolean) {
  modal.value.isHidden = isClosed
}

onMounted(() => {
  leapforceResource.get('users').then((users: Array<User>) => {
    TableData.value.tableBody = users.map((user: User) => ({
      name: user.name,
      phone: user.phone,
      email: user.email,
      isAdmin: user.isAdmin.toString() === '1' ? 'Sí' : 'No',
    }))
  })
})
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
        <div><button @click="openModal" class="button">Añadir nuevo usuario</button></div>
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
