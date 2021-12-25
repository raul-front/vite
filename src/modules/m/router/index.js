import { createRouter, createWebHistory } from 'vue-router'
import Home from 'm/views/home/index.vue'

const router = createRouter({
  history: createWebHistory('/m'),
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home,
    },
    {
      path: '/demo/pinia',
      name: 'Demo_Pinia',
      component: () => import('m/views/demo/pinia.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('m/views/other/notFound.vue'),
    },
  ],
})

export default router
