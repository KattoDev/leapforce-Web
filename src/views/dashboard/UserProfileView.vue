<script setup lang="ts">
import DashboardBase from "@/components/layout/DashboardBase.vue";
import ModuleName from "@/components/layout/moduleName.vue";
import ProfileForm from "@/components/forms/profileForm.vue";
</script>

<template>
  <DashboardBase>
    <div class="content">
      <ModuleName module-name="tu perfil" />
      <ProfileForm />
    </div>

    <!-- <div class="content">
      <div id="form-container">
        <form @submit.prevent="updateProfile">
          <div class="form-input">
            <input
              type="text"
              placeholder="Nombre"
              v-model="formData.name"
              required
            />
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
            <input
              type="email"
              placeholder="Email"
              v-model="formData.email"
              required
            />
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
          <div><button class="button">Guardar cambios</button></div>
        </form>
      </div>
    </div> -->
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
  overflow: hidden;
}
</style>
