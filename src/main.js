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
// 引入cookie插件
Vue.use(VueCookie);
// 引入图片懒加载插件
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
// 引入Message插件
Vue.prototype.$message = Message;
// 阻止启动生产消息
Vue.config.productionTip = false
// 引入VueAxios插件
Vue.use(VueAxios,axios);
// 配置axios
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 接口拦截
axios.interceptors.response.use((response)=>{
  let res = response.data;
  let path =location.hash;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    // 未登录
    if(path !='#/index')
    window.location.href = '/#/login'
    // return Promise.reject(res);
  }else{
    Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
