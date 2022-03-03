import Layout from '../layout/index.vue'

const route = [
  {
    path: '/system',
    component: Layout,
    redirect: '/404',
    hideMenu: true,
    meta: { title: '系统目录' },
    children: [
      {
        path: '/404',
        component: () => import('@/views/error/404.vue'),
        meta: { title: '404', hideTabs: true }
      },
      {
        path: '/401',
        component: () => import('@/views/error/401.vue'),
        meta: { title: '401', hideTabs: true }
      },
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/error/redirect.vue'),
        meta: { title: 'redirect', hideTabs: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hideMenu: true,
    meta: { title: '登录', hideTabs: true }
  },
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    component: Layout,
    redirect: '/404',
    hideMenu: true
  }
]

export default route
