import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/trpg',
      children: [
        {
          path: 'd20scoring',
          name: 'd20scoring',
          component: () => import('@/views/D20ScoringView.vue')
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
