<script setup lang="ts">
import LoginForm from '@/components/forms/loginForm.vue'
</script>

<template>
  <div id="container">
    <div id="login">
      <section id="gradient-container">
        <div id="app-title">
          <p class="font-megrim">leapforce</p>
          <p>team manager</p>
        </div>
        <p id="greeting">¡bienvenido de vuelta!</p>
      </section>
      <section id="login-container">
        <p id="login-title">inicio de sesión</p>
        <LoginForm />
        <div id="support">
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
#container {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

  #login {
    width: 60dvw;
    height: 65dvh;
    background-color: var(--background-200);
    display: flex;
    border-radius: 10px;
    overflow: hidden;

    #gradient-container {
      background: var(--login-gradient);
      width: calc(60dvh + 10%);
      height: inherit;
      z-index: 1;
      position: relative;

      #app-title {
        font-size: 1.5em;
        margin: 20px 0 0 20px;
        font-weight: 200;
        text-transform: uppercase;

        .font-megrim {
          font-size: 1.7em;
          font-weight: 800;
        }
      }

      #greeting {
        position: absolute;
        bottom: 20px;
        left: 20px;
        text-transform: lowercase;
      }
    }

    #login-container {
      width: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      #login-title {
        position: absolute;
        left: 0;
        font-size: 1.5em;
        font-weight: 600;
        margin: 20px 0 0 40px;
        text-transform: uppercase;
      }

      #support {
        position: absolute;
        bottom: 20px;
        text-align: center;

        a {
          text-decoration: none;
          color: var(--secondary-600);
        }

        a:hover {
          color: var(--primary-600);
        }
      }
    }
  }
}
</style>
