import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// createApp(App)
// .mount('#app')

const app = createApp(App)

app.config.globalProperties.$log = console.log

app.mount('#app')
