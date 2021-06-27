import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Login from './views/user/Login.vue'
import Register from './views/user/Register.vue'
import Listing from './views/list/Listing.vue'
import ToDo from './views/todo/ToDo.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
        	path: '/',
        	name: 'listing',
        	component: Listing
        },
        {
            path: '/app/to-do',
            name: 'todo',
            component: ToDo
        }
    ],
});

export default router