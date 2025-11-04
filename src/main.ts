import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importe o router
import './style.css' // Importe o CSS global

const app = createApp(App)

app.use(router) // Use o router
app.mount('#app')