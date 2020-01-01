// import basic vue stuff
import Vue from 'vue'
import Router from 'vue-router'
// import the component we need to display on the index page
import List from './components/List.vue'

// set up vue to use the 'Router' object
Vue.use(Router)

// export the 'Router' object
export default new Router({
    // history mode enables readable URLs and back/forward
    mode: 'history',
    base: process.env.BASE_URL,
    // set up components to load when URL changes
    routes: [
        {
            path: '/',
            name: 'list',
            component: List
        },
        {
            path: '/cart',
            name: 'cart',
            // imports are done on demand instead of up front
            // for an up front loading use the same procedure as for the path above instead
            // import the component like on line 5
            // use the component name (just the filename sans the extension)
            component: () => import (/* webpackChunkName: "cart" */ './components/Cart.vue')
        },
        {
            path: '/sell',
            name: 'sell',
            component: () => import (/* webpackChunkName: "sell" */ './components/Sell.vue')
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: () => import (/* webpackChunkName: "checkout" */ './components/Checkout.vue')
        }
    ],
    // set up scrollbehavior to remember scroll position
    scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }
    else if (to.hash) {
        return {selector: to.hash}
    } else {
            return { x: 0, y: 0 }
        }
    }
})