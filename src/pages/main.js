import { createApp } from 'vue'
import App from './App.vue'
import router from '@sys/router/index'
import './per'

const app = createApp(App)
app.use(router)
app.mount('#app')
