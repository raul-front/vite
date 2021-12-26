/*
 * @Descripttion:
 * @Author: pujianguo
 * @Date: 2021-12-26 19:52:06
 */
import {
  Button,
} from 'vant'

const components = [
  Button,
]

export default {
  install (Vue) {
    components.forEach(component => {
      Vue.use(component)
    })
  },
}
