import loading from './components/loading.vue'

export default {
  install:function(Vue){
    // console.log('loading install',Vue);
    Vue.component('loading',loading);
    // Vue.component('router-link',routerLink);
    // Vue.component('router-view',routerView);
  }
}