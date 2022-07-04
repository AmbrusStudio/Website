import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/world',
      name: 'world',
      component: () => import('@/views/WorldView.vue')
    },
    {
      path: '/world/ranger',
      name: 'world_ranger',
      component: () => import('@/views/world/RangerView.vue'),
      meta: {
        headerClass: 'world_ranger_header'
      }
    }
  ]
})

export default router
