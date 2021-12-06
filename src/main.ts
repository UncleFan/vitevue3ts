import { createApp } from 'vue'
import App from './App.vue'
import vant from 'vant'
import router from './router'
import "vant/lib/index.css"

createApp(App).use(router).use(vant).mount('#app')
