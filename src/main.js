import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/style/flex.css'
import http from  '@/service/index'


let app = createApp(App)
app.use(store)
app.use(router)
app.use(elementPlus)
app.mount('#app')



app.config.globalProperties.$http = http
