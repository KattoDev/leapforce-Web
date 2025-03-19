<script setup lang="ts">
import ProfileIcon from '@/assets/icons/profileIcon.vue'
import session from '@/utils/controllers/session'
</script>

<template>
  <div>
    <button>
      <ProfileIcon />
    </button>
    <button @click="session.logout" type="reset">cerrar sesión</button>
  </div>
</template>

<style scoped lang="css">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    background: var(--login-gradient);
    width: 50px;
    height: 50px;
    border-radius: 40px;
    border: none;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  button[type='reset'] {
    width: max-content;
    padding: 0 20px 0 20px;
    text-transform: capitalize;
    font-weight: 400;
  }

  button:hover {
    cursor: pointer;
    box-shadow: 0 0 12px var(--secondary-200);
    transform: translate(0, -1px);
  }
}
</style>
