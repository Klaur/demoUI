import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import feiyaui from 'feiya-ui'
// 实例化 Pinia
const pinia = createPinia()
// 创建挂在Vue 实例
let app = createApp(App)
// app.component(ZlButton.name, ZlButton)
app.use(feiyaui).use(pinia).use(router).mount('#app')
