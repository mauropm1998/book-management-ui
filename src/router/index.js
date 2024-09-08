import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/login/LoginView.vue'
import Platform from '@/platform/Platform.vue'

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
    component: Platform,
    children: [
      {
        path: 'books',
        name: 'platform-books',
        component: () => import('@/platform/views/Home.vue')
      },
      {
        path: 'my/books',
        name: 'my-books',
        component: () => import('@/platform/views/MyBooks.vue')
      },
      {
        path: 'my/books/create',
        name: 'create-book',
        component: () => import('@/platform/views/CreateBook.vue')
      }
    ]
  }
  // Adicione outras rotas conforme necessário
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
