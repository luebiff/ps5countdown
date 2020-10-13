import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/world',
            name: 'world',
            component: () => import(/* webpackChunkName: 'world' */ "../views/World.vue")
        },
        {
            path: '/us',
            name: 'us',
            component: () => import(/* webpackChunkName: 'us' */ "../views/Us.vue")
        }
    ]

})