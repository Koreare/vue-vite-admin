import router from './router'
import store from './store'
import NProgress from '@/utils/nprogress'
import { getToken } from '@/utils/auth'
import { systemTitle } from '@/config'


const whiteList = ['/login']

router.beforeEach((to, form, next) => {
  NProgress.start()
  if (getToken() || whiteList.indexOf(to.path) !== -1) {
    to.meta.title ? (changeTitle(to.meta.title)) : '' // 动态title
    next()
  } else {
    next('/login') // 全部重定向到登录页
    to.meta.title ? (changeTitle(to.meta.title)) : '' // 动态title
  }
})

router.afterEach((to, _from) => {
  const keepAliveComponentsName = store.getters['keepAlive/keepAliveComponentsName'] || []
  const name = to.matched[to.matched.length - 1].path
  if (!keepAliveComponentsName.includes(name)) {
    store.commit('keepAlive/addKeepAliveComponentsName', name)
  }
  NProgress.done()
})

function changeTitle (name) {
  document.title = `${name}-${systemTitle}`
}
