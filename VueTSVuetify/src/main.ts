import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style/index.css'

// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const vuetify = createVuetify({
// ... your configuration
})
app.use(vuetify)

app.mount('#app')
