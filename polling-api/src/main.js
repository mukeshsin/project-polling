import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { fetchData } from './components/api'

createApp(App).use(store).use(router).use(fetchData).mount('#app')
