import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Button } from 'vant';
// import 'vant/lib/index.css';
const app = createApp(App)
// app.use(Button)
app.use(store)
app.use(router).mount('#app')
