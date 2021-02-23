import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {path: '/', component: () => import('@/views/Home'), meta: {title: '首页'}},
    {path: '/about', component: () => import('@/views/About'), meta: {title: '关于'}},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
