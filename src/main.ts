import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { ToastService } from "primevue";
import PrimeVue from "primevue/config";

import { LeapforceTheme } from "./utils/helpers/theme";

import "./assets/main.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

app.use(ToastService);

app.use(PrimeVue, {
  theme: {
    preset: LeapforceTheme,
    options: {
      darkModeSelector: false,
      cssLayer: false,
    },
  },
});

app.mount("#app");
