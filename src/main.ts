import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import theme from './utils/controllers/theme'

const app = createApp(App)

app.use(createPinia())
app.use(router)

theme.set(localStorage.getItem('theme') || 'light')

app.mount('#app')
