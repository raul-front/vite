/*
 * @Descripttion: 注册全局组件
 * @Author: pujianguo
 * @Date: 2021-06-20 15:57:00
 */

export default {
  install (Vue) {
    // admin公共组件
    const components = import.meta.globEager('./*.vue')
    Object.keys(components).forEach(fileName => {
      const component = components[fileName]
      const componentName = fileName.replace(/(.*\/)*([^.]+).*/ig, '$2')
      Vue.component(componentName, component.default || component)
    })
  },
}
