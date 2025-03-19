<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import { sessionGuard } from '@/utils/helpers/pageGuard'
import { ref } from 'vue'
import { User } from '@/utils/Classes/User'

const user = ref({
  userToModify: '',
  name: '',
  phone: '',
  email: '',
  team: '',
  isAdmin: false,
})

const UserToUpdate = new User()

async function searchUser() {
  UserToUpdate.name = 'usuario a modificar'
  UserToUpdate.phone = 3123457890
  UserToUpdate.email = 'email@ead.com'
  UserToUpdate.team = 3
  UserToUpdate.isAdmin = true

  user.value = {
    userToModify: user.value.userToModify,
    name: UserToUpdate.name,
    phone: UserToUpdate.phone.toString(),
    email: UserToUpdate.email,
    team: UserToUpdate.team.toString(),
    isAdmin: UserToUpdate.isAdmin,
  }
}
async function updateInfo() {}
</script>

<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <SidebarComponent />
    </div>
    <div class="content">
      <p class="module-name">Editar perfil de usuario</p>

      <form @submit.prevent="searchUser">
        <div class="form-input">
          <input type="text" placeholder="Nombre del miembro a modificar" required />
        </div>
        <div><button type="submit" class="button">Buscar usuario</button></div>
      </form>

      <form @submit.prevent="updateInfo">
        <div class="form-input">
          <input type="text" v-model="user.name" placeholder="Nombre" required />
        </div>
        <div class="form-input">
          <input
            type="number"
            min="3000000000"
            max="3230000000"
            v-model="user.phone"
            placeholder="Número telefonico"
            required
          />
        </div>
        <div class="form-input">
          <input type="email" v-model="user.email" placeholder="Correo electronico" required />
        </div>
        <div class="form-input">
          <input type="text" v-model="user.team" placeholder="equipo de trabajo" required />
        </div>
        <div class="form-input">
          <p>Dar permisos de administrador:</p>
          <input type="checkbox" v-model="user.isAdmin" />
        </div>
        <div><button type="submit" class="button">Guardar cambios</button></div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.sidebar,
.content {
  border-radius: 10px;
}

.content {
  background-color: var(--primary-10);
  box-shadow: 0 0 12px var(--secondary-200);
  border-radius: 10px;
  padding: 20px;
  height: 93.5dvh;
  overflow: scroll;
}
</style>
