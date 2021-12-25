import { createRouter, createWebHistory } from 'vue-router'
import Home from 'pc/views/home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home,
    },
    {
      path: '/demo/pinia',
      name: 'Demo_Pinia',
      component: () => import('pc/views/demo/pinia.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('pc/views/other/notFound.vue'),
    },
  ],
})

export default router
