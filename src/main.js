import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalComponent from './components/common/global.js'

import 'styles/index.scss'

const app = createApp(App)
app.use(router).use(globalComponent)

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))
