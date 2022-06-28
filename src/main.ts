import 'uno.css'
import '@unocss/reset/tailwind.css'
import './styles/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

createApp(App).use(createPinia()).use(router).mount('#app')
