import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { initCounter } from '@/store/counter'
import vant from './plugins/vant'
import 'amfe-flexible'
import './styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(vant)
app.use(createPinia())

initCounter()

router.isReady().then(() => app.mount('#mApp'))
