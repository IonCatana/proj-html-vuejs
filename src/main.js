import Vue from 'vue'
import App from './App.vue'
import '@fontsource/pt-sans'
import '@fontsource/pt-sans/400.css'
import '@fontsource/pt-sans/700.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
