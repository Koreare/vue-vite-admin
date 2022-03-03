import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/index.vue'

import asyncRouter from './async-router'
import constantRouter from './constant-router'

const asyncRoutes = [
  ...asyncRouter,
  ...constantRouter
]

const routes = asyncRoutes

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
