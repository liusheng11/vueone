
import Vue from 'vue'
import App from './App'
//全局引入样式
import './assets/css/base.css';
import './assets/iconfont/iconfont.css';
import 'animate.css'

Vue.config.productionTip = false

// 路由
import router from './router.config.js';

//交互axios
import axios from 'axios'
axios.defaults.withCredentials=true; //全局配置携带跨源凭证
//配置拦截器
axios.interceptors.request.use(function (config) {
  // 在发出正确请求之前做点事
  // store.dispatch('showLoading');            
  return config;// 返回现在配置给拦截器,一定要反绘制
}, function (error) {
  // 在发出错误请求之前做点事
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // 在响应之后做点事
  // store.dispatch('hideLoading'); 
  return response;  // 回来的数据对象
}, function (error) {
  return Promise.reject(error);
});

Vue.prototype.$http=axios;

//状态管理
import store from './store'

// 过滤器
import filters from './filters'
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

// 引入插件
import loading from './loading';
Vue.use(loading);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
