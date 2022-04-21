import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/views/UserLogin.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: 'MesCommandes',
        component: () => import('@/views/Tab2Page.vue')
      }
      // {
      //   path: 'Commentaires',
      //   component: () => import('@/views/Tab3Page.vue')
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
