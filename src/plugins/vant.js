/*
 * @Descripttion: 注册vant组件
 * @Author: pujianguo
 * @Date: 2021-12-26 17:09:11
 */
import {
  ConfigProvider,
  Button,
  Popover,
  Popup,
  Dialog,
  Toast,
  Tabs,
  Tab,
  DropdownMenu,
  DropdownItem,
  Loading,
  CountDown,
} from 'vant'

const components = [
  ConfigProvider,
  Button,
  Popover,
  Popup,
  Dialog,
  Toast,
  Tabs,
  Tab,
  DropdownMenu,
  DropdownItem,
  Loading,
  CountDown,
]

export default {
  install (Vue) {
    components.forEach(component => {
      Vue.use(component)
    })
  },
}
