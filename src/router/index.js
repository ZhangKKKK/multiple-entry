import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/one-home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/one-about.vue')
    }
]
const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_ROOT_PATH),
    routes
})

export default router