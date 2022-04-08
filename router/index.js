
import Vue from 'vue'
import VueRouter from 'vue-router'
// import MyHome from '../views/MyHome.vue'

Vue.use(VueRouter)




const routes = [
        {
            path:'/',
            name:'login',
            component: () =>import('../views/Login/login.vue')
        },
        {

            path: '/MainHome',
            name: 'MainHome',
            component: () => import('../views/Main.vue'),
            children:[
                {
                    path:'/Myhome',
                    name:'MyHome',
                    component: () =>import('../views/home')
                },
                {
                    path: '/user',
                    name: 'user',
                    component: () => import('../views/User')
                },
                {
                    path: '/SeeOver',
                    name: 'SeeOver',
                    component: () => import('../views/see')
                },
                {
                    path: '/page1',
                    name: 'page1',
                    component: () => import('../views/other/pageOne.vue')
                },
                {
                    path: '/page2',
                    name: 'page2',
                    component: () => import('../views/other/pageTwo.vue')
                }

            ]
        }
        
       
        
    ]
    const router =new VueRouter({
        mode: 'history',
        routes
    })

export default router