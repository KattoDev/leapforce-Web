<script setup></script>

<template>
  <div id="container">
    <div id="login">
      <div id="gradient-container">
        <div id="app-title">
          <p class="megrim">LEAPFORCE</p>
          <p>team manager</p>
        </div>
        <p id="greeting">¡Bienvenido de vuelta!</p>
      </div>
      <div id="login-container">
        <p id="login-title">Inicio de sesión</p>
        <form>
          <div>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div>
            <input type="password" name="password" placeholder="password" />
          </div>
          <div id="button-container"><button>Iniciar sesión</button></div>
        </form>
        <div id="support">
          <p>Si tienes problemas para iniciar sesión contactate con</p>
          <p>support@leapforce.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

  #login {
    width: 60dvw;
    height: 65dvh;
    background-color: var(--login-box);
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

        .megrim {
          font-size: 1.7em;
          font-weight: bold;
        }
      }

      #greeting {
        position: absolute;
        bottom: 20px;
        left: 20px;
        font-weight: bold;
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
        font-weight: bold;
        margin: 20px 0 0 40px;
      }

      form {
        margin: 80px 0 0 -10px;

        input {
          font-family: 'Sono', serif;
          height: 50px;
          width: 400px;
          margin-bottom: 20px;
          border-radius: 20px;
          font-size: 1em;
          border: none;
          box-shadow: 0 0 12px var(--shadow);
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
          }
          button:hover {
            box-shadow: 0 0 12px var(--shadow);
          }
        }
      }

      #support {
        width: 400px;
        position: absolute;
        bottom: 20px;
        text-align: center;
      }
    }
  }
}
</style>
