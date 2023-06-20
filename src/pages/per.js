import router from './router'
router.beforeEach((to, from, next) => {
    console.log('入口222', to)
    next()
})