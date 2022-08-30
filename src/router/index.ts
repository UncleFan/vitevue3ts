import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('@/views/Search.vue'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/Friends',
    name: 'Friends',
    component: () => import('@/views/Friends.vue'),
    meta: {
      title: '朋友'
    }
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: () => import('@/views/Setting.vue'),
    meta: {
      title: '设置'
    }
  },
  // 错误路由跳转
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '404'
    }
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
