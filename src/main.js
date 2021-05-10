import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.use(ElementUI)

new Vue({
  lists:['推荐','后端','前端','Android','iOS','人工智能','开发工具','代码人生','阅读'],
  router,
  store,
  render: h => h(App)
}).$mount('#app')
