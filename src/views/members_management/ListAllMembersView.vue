<script setup lang="ts">
import DashboardBase from "@/components/layout/DashboardBase.vue";
import ModuleName from "@/components/layout/moduleName.vue";
import AddUserModal from "@/components/modals/AddUserModal.vue";
import { FirebaseService } from "@/services/FirebaseService";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "primevue";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { onMounted, ref, type Ref } from "vue";

onMounted(async () => {
  const colRef = collection(FirebaseService.db, "users");
  const usersSnap = await getDocs(colRef);

  usersList.value = usersSnap.docs.map((usr) => ({
    name: usr.data().name,
    email: usr.data().email,
    phone: usr.data().phone,
    isAdmin: usr.data().isAdmin ? "Sí" : "No",
  }));
});

const modal = ref({
  isHidden: true,
});

const usersList: Ref<
  { name: string; email: string; phone: string; isAdmin: string }[]
> = ref([]);

function openModal() {
  modal.value.isHidden = !modal.value.isHidden;
}

function closeModal(isClosed: boolean) {
  modal.value.isHidden = isClosed;
}
</script>

<template>
  <DashboardBase>
    <AddUserModal
      @close-modal="closeModal"
      :class="modal.isHidden ? 'modal-hidden' : ''"
    />
    <section class="content">
      <nav>
        <ModuleName module-name="todos los miembros" />
        <Button
          label="Añadir nuevo usuario"
          severity="secondary"
          @click="openModal"
        />
      </nav>
      <div class="mt-5 overflow-hidden h-96">
        <DataTable :value="usersList" tableStyle="min-width: 50rem">
          <Column field="name" header="Nombre"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="phone" header="Número de teléfono"></Column>
          <Column field="isAdmin" header="Administrador"></Column>
        </DataTable>
      </div>
    </section>
  </DashboardBase>
</template>

<style scoped>
.sidebar,
.content {
  border-radius: 10px;
}

.content {
  background-color: var(--p-primary-50);
  box-shadow: 0 0 12px var(--p-secondary-200);

  border-radius: 10px;
  padding: 20px;
  height: inherit;
  overflow: scroll;

  nav {
    display: flex;
    justify-content: space-between;
  }
  button {
    background: var(--p-secondary-100);
  }

  button:hover {
    border: 1px solid var(--p-secondary-200);
  }
}
</style>
