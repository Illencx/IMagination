import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Register.vue'
import DashBoard from '../views/DashBoard.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Register',
    component: Reg
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
