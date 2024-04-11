import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@tabler/core'
import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/css/tabler-flags.min.css'
import '@tabler/core/dist/css/tabler-payments.min.css'
import '@tabler/core/dist/css/tabler-vendors.min.css'
import '@tabler/core/dist/js/tabler.esm'
import VueSweetalert from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router).use(VueSweetalert)

app.mount('#app')
