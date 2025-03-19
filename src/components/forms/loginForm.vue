<script setup lang="ts">
import { Session } from '@/utils/Classes/Session'
import type { User } from '@/utils/Classes/User'
import { ref } from 'vue'

const loginForm = ref({
  email: '',
  password: '',
})

async function sendLoginForm() {
  const user: User = new Session()

  user.email = loginForm.value.email
  user.password = loginForm.value.password

  user.Login()
}
</script>

<template>
  <form @submit.prevent="sendLoginForm" method="get">
    <div>
      <input
        type="email"
        class="font-sono"
        v-model="loginForm.email"
        placeholder="email:"
        required
      />
    </div>
    <div>
      <input
        type="password"
        class="font-sono"
        v-model="loginForm.password"
        placeholder="contraseña:"
        required
      />
    </div>
    <div id="button-container"><button type="submit" class="font-sono">iniciar sesión</button></div>
  </form>
</template>

<style scoped lang="css">
form {
  margin: 80px 0 0 0;

  input {
    font-weight: 400;
    padding: 0 0 0 10px;
    height: 50px;
    width: 400px;
    margin-bottom: 20px;
    border-radius: 20px;
    font-size: 1em;
    border: none;
    background-color: var(--primary-100);
    box-shadow: 0 0 12px var(--secondary-300);
    text-transform: capitalize;
  }

  #button-container {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      height: 50px;
      width: 225px;
      border-radius: 20px;
      border: none;
      font-size: 1em;
      background: var(--login-gradient);
      text-transform: capitalize;
    }

    button:hover {
      cursor: pointer;
      box-shadow: 0 0 1em var(--primary-600);
      transform: translate(0, -1px);
    }
  }
}
</style>
