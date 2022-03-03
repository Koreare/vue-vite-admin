import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import asyncRouter from './async-router'
import constantRouter from './constant-router'

const asyncRoutes = [
  ...asyncRouter,
  ...constantRouter
]

// 判断在权限中存不存在
function isExit(roles, powerRoles) {
  return roles.some(item => powerRoles.includes(item))
}

function distributeRouter(routerList ,powerRoles) {
  const data = []
  routerList.forEach(item => {
    if(item.meta && item.meta.roles) {
      if(isExit(item.meta.roles, powerRoles)) {
        if(item.children) {
          item.children = distributeRouter(item.children, powerRoles)
        }
        data.push(item)
      }
    }
  })
  return data
}

// console.log(store.state.user.info)
const powerRoles = ['F-0100','F-0101', 'F-0200', 'F-0201']


const routes = distributeRouter(asyncRoutes, powerRoles)

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
