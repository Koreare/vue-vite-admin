import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/common.scss' // 公共样式

import locale from 'element-plus/lib/locale/lang/zh-cn'

import './permission' // 路由管理

import router from './router' // 路由
import store from './store'// vuex

import ElIcons from './components/icons/index.vue' // 全局icon
import permission from './components/permission/index' // 页面权限控制
import pagination from './components/pagination/index.vue' // 分页组件

const app = createApp(App)
app.use(ElementPlus, { locale })
app.use(store)
app.use(router)
app.use(permission)
app.component('el-icons', ElIcons)
app.component('f-pagination', pagination)
app.mount('#app')
