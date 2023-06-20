import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import './per'

const app = createApp(App)
console.log(router, app)
app.use(router)
app.mount('#app')
