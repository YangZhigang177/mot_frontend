import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createRouter,createWebHashHistory} from "vue-router";

import routes from "./router/index"
import axios from "./service/axios"

const app = createApp(App)
const router =  createRouter({
  history: createWebHashHistory(),
  routes
})
app.config.globalProperties.$axios = axios
app.use(ElementPlus)
app.use(router)
app.mount('#app')