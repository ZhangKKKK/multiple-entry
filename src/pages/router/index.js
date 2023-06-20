import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@sys/one-home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@sys/one-about.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(process.env.VUE_APP_ROOT_PATH),
    routes
})

console.log('run 222')
export default router