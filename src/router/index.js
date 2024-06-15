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
          // component: () => import('@/views/utility/DiscordOverlayView.vue')
        }
      ]
    }, {
      path: '/foundryvtt',
      children: [
        {
          path: 'token-swap',
          name: 'token-swap',
          component: () => import('@/views/fovttscr/TokenSwapView.vue')
          // component: () => import('@/views/utility/DiscordOverlayView.vue')
        }
      ]
    },
    {
      path: '/utility',
      children: [
        {
          path: 'discordoverlay',
          name: 'discordoverlay',
          component: () => import('@/views/utility/DiscordOverlayView.vue')
        },
        {
          path: 'discordoverlayone',
          name: 'discordoverlayone',
          component: () => import('@/views/utility/DiscordOverlayForOneView.vue')
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
