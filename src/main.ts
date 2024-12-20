import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@/assets/styles/main.css'
import 'vue-toast-notification/dist/theme-sugar.css'

loadFonts()

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
