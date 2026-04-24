import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/DashboardView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/ProfileView.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#root')
