import Layout from '../layout/index.vue'

const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'dashboard', icon: 'el-icon-menu' },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'Grid', hideClose: true }
      }
    ]
  },
  {
    path: '/demo',
    component: Layout,
    alwaysShow: true,
    meta: { title: '页面', icon: 'Calendar' },
    children: [
      {
        path: 'demo',
        meta: { title: '私有示例' },
        component: () => import('@/views/demo/index.vue')
      },
      {
        path: 'text',
        meta: { title: '测试' },
        component: () => import('@/views/text/index.vue')
      }
    ]
  }
]

export default route
