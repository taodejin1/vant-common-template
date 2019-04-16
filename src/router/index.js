import Vue from 'vue'
import Router from 'vue-router'
import VuxPage from '@/views/VuxPage'
import VantPage from '@/views/VantPage'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [
        {
            path: '/',
            redirect:'/vux'
        },
        {
            path: '/vux',
            name: 'vux',
            component: VuxPage
        },
        {
            path: '/vant',
            name: 'vant',
            component: VantPage
        }
    ]
})
