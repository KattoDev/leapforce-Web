<script setup lang="ts">
import LoginForm from "@/components/forms/loginForm.vue";
</script>

<template>
  <div class="w-dvw h-dvh flex items-center justify-center">
    <div
      class="w-[60dvw] h-[65dvh] bg-(--p-background-200) flex rounded-3xl overflow-hidden"
    >
      <section id="" class="gradient-container z-10 relative">
        <div class="text-3xl font-extralight uppercase mt-5 ml-5">
          <p class="font-megrim text-5xl">leapforce</p>
          <p>team manager</p>
        </div>
        <p class="absolute bottom-5 left-5 lowercase">¡bienvenido de vuelta!</p>
      </section>

      <section class="login-container grid grid-rows-[auto_1fr_auto]">
        <p class="text-2xl font-bold mt-5 ml-10 uppercase">inicio de sesión</p>
        <LoginForm class="mt-5" />
        <div id="support" class="text-center mb-3">
          <p>
            Si tienes problemas para iniciar sesión, contactate con
            <a href="mailto:app.leapforce@gmail.com">app.leapforce@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="css">
.gradient-container {
  background: linear-gradient(
    70deg,
    var(--p-background-500) 0%,
    var(--p-accent-200) 100%
  );
  width: calc(60dvh + 10%);
  height: inherit;
}

.login-container {
  width: inherit;

  a {
    text-decoration: none;
    color: var(--secondary-600);
  }

  a:hover {
    color: var(--primary-600);
  }
}
</style>
