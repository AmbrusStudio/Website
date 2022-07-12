import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mint',
      component: () => import('@/views/mint/MintView.vue')
    }
  ]
})

export default router
