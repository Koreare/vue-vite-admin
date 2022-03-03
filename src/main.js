import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/common.scss'

import './permission'

import router from './router'
import store from './store'

import ElIcons from './components/icons/index.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.component('el-icons', ElIcons)
app.mount('#app')
