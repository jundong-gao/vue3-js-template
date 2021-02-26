import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/style/flex.css'
import http from  '@/service/index'
import createProvide from '@/utils/provide'


let app = createApp(App)
app.use(store)
app.use(router)
app.use(elementPlus)
app.mount('#app')

createProvide(app)


/**
 * 挂载全局变量 替代vue2.x 中 vue.prototype.
 * ！！！看尤大大的意思 好像不建议这么使用 globalProperties
 * 由于大家一时半会也没办法直接从vue2的模式跳出来。具体请参考：vue/rfcs https://github.com/vuejs/rfcs/pull/117
 * vue3.x不推荐在原型链上挂载一些东西这种适用方法，而是推荐使用依赖注入：provide和inject。
 * provide 和 inject 使用方法 参考@/utils/privide.js中写法
 */
app.config.globalProperties.$http = http


export default app



