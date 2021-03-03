import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Home1 from '../views/Home1.vue'
import Home2 from '../views/Home2.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        breadCrumb: {
            name: 'Home',
            link: '/'
        }
   },
    children: [
        {
           path: '/home1',
           name: 'Home1',
           component: Home1,
           meta: {
                breadCrumb: {
                    name: 'Home1',
                    link: '/home1'
                }
           },
           children: [
               {
                    path: '/home2',
                    name: 'Home2',
                    component: Home2,
                    meta: {
                            breadCrumb: {
                                name: 'Home2',
                                link: '/home2'
                            }
                    }
               }
           ]
       }
   ]
},
{
    path: '/about',
    name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '',
        component: Layout,
        redirect: 'noredirect',
        hidden: true,
        children: [
        {
            path: '/user',
            component: () => import( /* webpackChunkName: "about" */ '../views/User.vue'),
            name: 'User',
            hidden: true,
            meta: {
                breadCrumb: 'View User'
            },
            children: [
            {
                path: '/member',
                component: () => import( /* webpackChunkName: "about" */ '../views/Member.vue'),
                name: 'Member',
                meta: {
                    breadCrumb: 'View member'
                },
                children: [
                {
                    path: '/test',
                    component: () => import( /* webpackChunkName: "about" */ '../views/Test.vue'),
                    name: 'Test',
                    meta: {
                        breadCrumb: 'View test'
                    },
                }
                ]
            }
            ]

        }
        ]
    },
    ]


    const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })

    export default router
