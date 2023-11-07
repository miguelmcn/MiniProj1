import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MeView from '../views/MeView.vue'
import DoView from '../views/DoView.vue'
import HobbiesView from '../views/HobbiesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/me',
      name: 'me',
      component: MeView
    },
    {
      path: '/do',
      name: 'do',
      component: DoView
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: HobbiesView
    }
  ]
})

export default router
