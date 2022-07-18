import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../layouts/Admin.vue'
import Pages from '../layouts/Pages.vue'

import Home from '../views/Home/Home.vue'
import About from '../views/Home/About.vue'
import Blog from '../views/Home/Blog.vue'
import Portofolio from '../views/Home/Portofolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/',
      name: 'Pages',
      component: Pages,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'portofolio',
          name: 'Portofolio',
          component: Portofolio
        },
        {
          path: 'blog',
          name: 'Blog',
          component: Blog,
        },
        {
          path: 'about',
          name: 'About',
          component: About
        }
      ]
    }
  ]
})

export default router
