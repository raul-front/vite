import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { initCounter } from './store/counter'

const app = createApp(App)
app.use(router)
app.use(createPinia())

// 配置 Element 默认
app.config.globalProperties.$ELEMENT = {
  size: 'large', zIndex: 3000,
}

initCounter()

router.isReady().then(() => app.mount('#app'))
