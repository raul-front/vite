import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'Home',
      component: () => import('pc/views/home/index.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('pc/views/other/login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('pc/views/other/notFound.vue'),
    },
  ],
})

export default router
