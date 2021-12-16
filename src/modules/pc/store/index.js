import { createStore } from 'vuex'

const modules = {}
const allModules = import.meta.globEager('./modules/*.js')
Object.keys(allModules).forEach(path => {
  const fileName = path.replace(/(.*\/)*([^.]+).*/ig, '$2')
  modules[fileName] = allModules[path][fileName] || allModules[path].default || allModules[path]
})

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: modules,
})
