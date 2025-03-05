<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['closeModal'])

const modal = ref({
  stepTwo: false,
  newMember: {
    name: '',
    phone: '',
    email: '',
    team: '',
    isAdmin: false,
  },
})

function toggleStep() {
  modal.value.stepTwo = !modal.value.stepTwo
}

function closeModal() {
  emit('closeModal', true)

  // reset modal values after close
  modal.value.stepTwo = false
  modal.value.newMember = { name: '', phone: '', email: '', team: '', isAdmin: false }
}
</script>

<template>
  <div class="modal">
    <div id="container">
      <div id="basics" :class="modal.stepTwo ? 'modal-hidden' : ''">
        <div class="close-btn"><p @click="closeModal">x</p></div>
        <p>¡Comencemos por los datos basicos!</p>
        <div>
          <form @submit.prevent="toggleStep">
            <div class="form-input">
              <input
                type="text"
                v-model="modal.newMember.name"
                placeholder="Nombre del miembro"
                required
              />
            </div>
            <div class="form-input">
              <input
                type="number"
                v-model="modal.newMember.phone"
                min="3000000000"
                max="3230000000"
                placeholder="Número telefonico"
                required
              />
            </div>
            <div class="form-input">
              <input
                type="email"
                v-model="modal.newMember.email"
                placeholder="Correo electronico"
                required
              />
            </div>
            <div class="nav-buttons">
              <button @click="closeModal">Cancelar</button>
              <button>Siguiente</button>
            </div>
          </form>
        </div>
      </div>
      <div id="advanced" :class="!modal.stepTwo ? 'modal-hidden' : ''">
        <div class="close-btn"><p @click="closeModal">x</p></div>
        <p>¡Ahora añadamos más información a {{ modal.newMember.name }}!</p>
        <div>
          <form @submit.prevent="">
            <div class="form-input">
              <input
                type="text"
                v-model="modal.newMember.team"
                placeholder="equipo de trabajo"
                required
              />
            </div>
            <div class="form-input">
              <p>¿{{ modal.newMember.name }} es un administrador?</p>
              <input type="checkbox" v-model="modal.newMember.isAdmin" />
            </div>
            <div class="nav-buttons">
              <button @click="toggleStep">Atras</button>
              <button>Añadir</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  width: 30dvw;
  height: max-content;
  border-radius: 10px;
  background-color: #fff;
  margin: 10px;

  #basics,
  #advanced {
    border-radius: 10px;
    background-color: #fff;
    margin: 10px;
    width: inherit;
    height: inherit;
  }
}
</style>
