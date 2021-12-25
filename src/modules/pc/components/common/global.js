/*
 * @Descripttion: 注册全局组件
 * @Author: pujianguo
 * @Date: 2021-12-24 23:12:59
 */

export default {
  install (Vue) {
    const components = import.meta.globEager('./*.vue')
    Object.keys(components).forEach(fileName => {
      const component = components[fileName]
      const componentName = fileName.replace(/(.*\/)*([^.]+).*/ig, '$2')
      Vue.component(componentName, component.default || component)
    })
  },
}