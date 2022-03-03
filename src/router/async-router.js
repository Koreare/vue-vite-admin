import Layout from '../layout/index.vue'

const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'dashboard',roles: ['F-0100'], icon: 'el-icon-menu' },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'Grid', roles: ['F-0101'], hideClose: true }
      }
    ]
  },
  {
    path: '/demo',
    component: Layout,
    alwaysShow: true,
    meta: { title: '页面', roles: ['F-0200'], icon: 'Calendar' },
    children: [
      {
        path: 'demo',
        meta: { title: '私有示例', roles: ['F-0201'], },
        component: () => import('@/views/demo/index.vue')
      },
      {
        path: 'text',
        meta: { title: '测试', roles: ['F-0202'], },
        component: () => import('@/views/text/index.vue')
      }
    ]
  }
]

export default route
