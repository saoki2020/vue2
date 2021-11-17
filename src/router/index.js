import Vue from 'vue'
import VueRouter from 'vue-router'
import myForm1 from '../views/myForm1.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/myForm1',
    name: 'myForm1',
    component: myForm1,
  },
  {
    path: 'myForm2',
    name: 'myForm2',
    component: () => import('../views/myForm2.vue')
  },
  {
  path: '/myForm3',
  name: 'myForm3',
  component: () => import('../views/myForm3.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
