import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'

// mock开关
const mock =false;
if(mock){
  require('./mock/api');
}
Vue.config.productionTip = false
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueAxios,axios);
// 接口错误拦截
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.interceptors.response.use((response)=>{
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    // 未登录
    window.location.href = '/#/login'
  }else{
    alert(res.msg);
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
