import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: () => import(/* webpackChunkName: "main-view" */ '../views/MainView.vue')
  },
  {
    path: '/cards',
    name: 'OverflowCard',
    component: () => import(/* webpackChunkName: "overflow-card" */ '../views/OverflowCard.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
