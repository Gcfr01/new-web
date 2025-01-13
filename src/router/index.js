import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CareerView from '@/views/CareerView.vue'
import AboutView from '@/views/AboutView.vue'
import BrandsView from '@/views/BrandsView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView

  },
  {
    path: '/career',
    name: 'career',
    component: CareerView
  },
  {
    path: '/brands',
    name: 'brands',
    component: BrandsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }

  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
