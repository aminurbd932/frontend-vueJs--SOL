import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path     : '/',
        name     : 'Home',
        component: Home,
    },
    {
        path: '/checkout',
        name: 'Checkout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue'),
    },
]

const router = new VueRouter({
    mode                : 'history',
    base                : process.env.BASE_URL,
    linkActiveClass     : 'active',
    linkExactActiveClass: 'active',
    routes,
})

export default router
