import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixin'
window.Kakao.init('a0bf2b69f8ca20505434a2e080ca0394'); // 사용하려는 앱의 JavaScript 키 입력



createApp(App).use(store).use(router).mixin(mixins).mount('#app') 
