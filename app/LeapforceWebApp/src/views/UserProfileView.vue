<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import { sessionGuard } from '@/components/pageGuard'
import { ref } from 'vue'
import { Session } from '@/stores/Classes/Session'
import { User } from '@/stores/Classes/User'

sessionGuard()

const formData = ref({
  name: '',
  phone: 3000000000,
  email: '',
  password: '',
  validatePassword: '',
  showPassword: false,
})

let user: User = new Session()

formData.value.name = user.name
formData.value.phone = user.phone
formData.value.email = user.email
formData.value.password = user.password
formData.value.validatePassword = user.password

function validatePasswordField(): boolean {
  return formData.value.password === formData.value.validatePassword ? true : false
}

async function updateProfile() {
  if (!validatePasswordField()) {
    alert('No se puede actualizar la información, por favor revisa la información')
  } else {
    // ! TODO Repair this
    /* const session = JSON.parse(localStorage.getItem('session') || '')[0]

    let formJSON = JSON.parse(JSON.stringify(formData.value))

    formJSON.UID = session.uid
    formJSON.isAdmin = session.isAdmin
    formJSON.team = session.team

    const body: JSON = formJSON
    patchMethod('users/', body) */
  }
}
</script>

<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <SidebarComponent />
    </div>
    <div class="content">
      <div>
        <p class="module-name">Tu perfil</p>
      </div>
      <div id="form-container">
        <form @submit.prevent="updateProfile">
          <div class="form-input">
            <input type="text" placeholder="Nombre" v-model="formData.name" required />
          </div>
          <div class="form-input">
            <input
              type="number"
              placeholder="Número de telefono"
              min="3000000000"
              max="3300000000"
              v-model="formData.phone"
              required
            />
          </div>
          <div class="form-input">
            <input type="email" placeholder="Email" v-model="formData.email" required />
          </div>
          <div class="form-input">
            <input
              :type="formData.showPassword ? 'text' : 'password'"
              placeholder="Contraseña"
              v-model="formData.password"
              required
              class="passwordField"
              v-on:change="validatePasswordField"
              :class="!validatePasswordField() ? 'not-valid' : ''"
            />
            <div id="toggle-password">
              <input type="checkbox" v-model="formData.showPassword" />
              <label>Ver contraseña</label>
            </div>
          </div>
          <div class="form-input">
            <input
              :type="formData.showPassword ? 'text' : 'password'"
              placeholder="Validar contraseña"
              v-model="formData.validatePassword"
              class="passwordField"
              required
              v-on:change="validatePasswordField"
              :class="!validatePasswordField() ? 'not-valid' : ''"
            />
          </div>
          <div><button>Guardar cambios</button></div>
        </form>
      </div>
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
  overflow: hidden;

  #form-container {
    height: 96%;

    form {
      margin: 30px 0 0 20px;

      div {
        position: relative;
        display: flex;

        input {
          width: 60dvw;
        }

        input[type='checkbox'] {
          width: 20px;
          border: none;
          height: 30px;
        }

        label {
          margin: 10px;
        }

        input[type='checkbox']:hover {
          cursor: pointer;
        }

        button {
          height: 50px;
          width: 225px;
          border-radius: 20px;
          border: none;
          font-size: 1em;
          background: var(--login-gradient);
        }

        button:hover {
          box-shadow: 0 0 12px var(--shadow);
          cursor: pointer;
        }
      }
    }
  }

  .not-valid {
    box-shadow: 0 0 12px red;
  }
}
</style>
