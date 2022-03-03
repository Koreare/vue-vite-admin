import { createStore } from 'vuex'
const debug = process.env.NODE_ENV !== 'production'

const files = import.meta.globEager('./modules/*.js')

const modules = {}
Object.keys(files).forEach((c) => {
  const module = files[c].default
  const moduleName = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  modules[moduleName] = module
})

export default createStore({
  modules,
  strict: debug
})
