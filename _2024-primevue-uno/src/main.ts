import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'

// import '@unocss/reset/tailwind-compat.css' // Reset breaks components, like button
import './style.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'virtual:uno.css'

const app = createApp(App)
app.use(PrimeVue, {
//   unstyled: true,
})

app.mount('#app')
