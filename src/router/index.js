import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/login/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/RegisterView.vue')
  },
  {
    path: '/register/activate-account',
    name: 'activate-account',
    component: () => import('@/views/register/ActivateAccountView.vue')
  },
  {
    path: '/platform',
    name: 'platform',
    component: () => import('@/views/register/ActivateAccountView.vue'),
    children: []
  }
  // Adicione outras rotas conforme necessário
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
