import "./assets/main.css";
import "./assets/tailwind.css";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";

import theme from "./utils/controllers/theme";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

theme.set(localStorage.getItem("theme") || "light");

app.mount("#app");
