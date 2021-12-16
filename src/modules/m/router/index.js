import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/m'),
  routes: [
    {
      path: '',
      name: 'Home',
      component: () => import('m/views/home/index.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('m/views/other/login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('m/views/other/notFound.vue'),
    },
  ],
})

export default router
