import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/Mes Commandes'
  }
  // {
  //   path: '/tabs/',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/tabs/Mes Commandes'
  //     },
  //     // {
  //     //   path: 'tab1',
  //     //   component: () => import('@/views/Tab1Page.vue')
  //     // },
  //     // {
  //     //   path: 'tab2',
  //     //   component: () => import('@/views/Tab2Page.vue')
  //     // },
  //     {
  //       path: 'Mes Commandes',
  //       component: () => import('@/views/Tab3Page.vue')
  //     },
  //     {
  //       path: 'Commentaire',
  //       component: () => import('@/views/Tab4Page.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
