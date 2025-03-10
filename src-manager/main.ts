import { createApp } from 'vue'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Manager from './Manager.vue'

import '../static/css/default-font.css'


// 动态路由
import { createMemoryHistory, createRouter } from 'vue-router'

import Welcome from './routers/Welcome.vue'
import Support from './routers/Support.vue'
import Widget  from './routers/Widget.vue'
import Theme   from './routers/Theme.vue'
import Develop from './routers/Develop.vue'

const routes = [
  { path: '/', component: Welcome },

  { path: '/welcome', component: Welcome },
  { path: '/support', component: Support },
  { path: '/widget',  component: Widget },
  { path: '/theme',   component: Theme },
  { path: '/develop', component: Develop }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


// 持久化
import { createPinia } from 'pinia'

const pinia = createPinia()


// 应用
const app = createApp(Manager)
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .mount('#manager')
