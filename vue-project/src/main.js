import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'

createApp(App).use(router).mixin(mixins).mount('#app')

const KAKAO_APP_KEY = process.env.VUE_APP_KAKAO_API;
console.log("🚀 ~ file: main.js:9 ~ KAKAO_APP_KEY:", KAKAO_APP_KEY)

window.Kakao.init(`${KAKAO_APP_KEY}`)