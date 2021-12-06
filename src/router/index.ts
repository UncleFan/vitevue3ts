import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/Friends',
    name: 'Friends',
    component: () => import('@/views/Friends.vue')
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: () => import('@/views/Setting.vue')
  },
  // 错误路由跳转
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
