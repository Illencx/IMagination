import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// 引入elementUI 需要安装corejs
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).use(store).mount('#app')
